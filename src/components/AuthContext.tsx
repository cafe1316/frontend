import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { UserDto } from "../api/types/index";
import { authService } from "../api/services/authService";

// --- 第一站：定義數據結構 ---
// AuthState 是整門店的「登錄狀態記錄本」
interface AuthState {
  isAuthenticated: boolean; // 是否已登錄
  token: string | null;      // 我們的自家 JWT 令牌
  user: UserDto | null;      // 用戶基本資料（頭像、姓名）
  isLoading: boolean;        // 是否正在核對清單
}

// --- 第二站：定義動作指令 (Actions) ---
// 就像命令清單，告訴狀態管理員要幹什麼
type AuthAction =
  | { type: "LOGIN"; payload: { token: string; user: UserDto } } // 指令：執行登錄，並帶上新令牌和用戶資料
  | { type: "LOGOUT" }                                            // 指令：執行登出，清空一切
  | { type: "SET_USER"; payload: UserDto }                        // 指令：僅更新用戶資料
  | { type: "SET_LOADING"; payload: boolean };                    // 指令：設置加載狀態

// 初始狀態：默認所有人都是遊客，還在加載中
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  isLoading: true,
};

// --- 第三站：狀態管理員 (Reducer) ---
// 它是個「純函數」，根據指令(Action)返回新的狀態(State)
// 它不負責調用 API，只負責根據 API 的結果來更新記錄本
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        isLoading: false,
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

// --- 第四站：廣播站接口 (Context) ---
interface AuthContextType extends AuthState {
  login: (token: string, user: UserDto) => void;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- 第五站：廣播站發射器 (Provider) ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // 使用 useReducer 來管理核心狀態
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 向後端請求獲取當前用戶最新資料
  const apiFetchProfile = async (token?: string) => {
    try {
      // 只有在瀏覽器裡有 token 時，才去後端問「我是誰」
      if (!token && !state.token) return;

      // 調用 authService.ts（通訊員）發送 GET /api/auth/me
      const user = await authService.getCurrentUser();

      // 更新本地存儲，防止刷新頁面丟失
      localStorage.setItem("user", JSON.stringify(user));

      // 發送指令給 Reducer，更新資料
      dispatch({ type: "SET_USER", payload: user });

      // 如果有 Token 但還沒顯示登錄，自動完成「登錄中」狀態
      if (token && !state.isAuthenticated) {
        dispatch({ type: "LOGIN", payload: { token, user } });
      }
    } catch (error: any) {
      console.error("Failed to fetch user profile", error);
      // 如果後端說 Token 沒用了 (404/401)，自動登出
      if (error.response?.status === 404) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // 初始掛載：當用戶重新打開瀏覽器時的「恢復現場」
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token) {
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          dispatch({ type: "LOGIN", payload: { token, user } });
        } catch (e) {
          localStorage.removeItem("user");
        }
      }
      // 異步去後端核實最新的資料 Always try to refresh from API
      apiFetchProfile(token);
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  // When the Login.tsx component successfully receives the JWT from the backend, call this function
  const login = (token: string, user: UserDto) => {
    try {
      // 1. Save to browser safe box
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e: any) {
      console.error("Failed to write to localStorage. This may be due to privacy settings (e.g. Safari ITP) or storage quota exceeded.", e);
    }

    // 2. Broadcast to the whole site: We are logged in!
    dispatch({
      type: "LOGIN",
      payload: { token, user },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  const fetchUserProfile = async () => {
    await apiFetchProfile();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        fetchUserProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// --- 第六站：自定義 Hook (用來方便組件調用) ---
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
