import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { UserDto } from "../api/types/index";
import { authService } from "../api/services/authService";

// 1. 定义状态类型
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: UserDto | null;
  isLoading: boolean;
}

// 2. 定义操作类型 (Action)
type AuthAction =
  | { type: "LOGIN"; payload: { token: string; user: UserDto } }
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: UserDto }
  | { type: "SET_LOADING"; payload: boolean };

// 3. 初始状态
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  isLoading: true,
};

// 4. Reducer (交警)：处理状态变更逻辑
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
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// 5. 创建 Context
interface AuthContextType extends AuthState {
  login: (token: string, user: UserDto) => void;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 6. Provider 组件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Helper to fetch profile from API
  const apiFetchProfile = async (token?: string) => {
    try {
      if (!token && !state.token) return;
      const user = await authService.getCurrentUser();
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "SET_USER", payload: user });

      // If we had a token but no user authenticated state, login fully
      if (token && !state.isAuthenticated) {
        dispatch({
          type: "LOGIN",
          payload: { token, user },
        });
      }
    } catch (error: any) {
      console.error("Failed to fetch user profile", error);
      // Auto-logout if user not found (e.g. DB reset)
      if (error.response?.status === 404) {
        console.warn("User not found, logging out...");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token) {
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          dispatch({
            type: "LOGIN",
            payload: { token, user },
          });
        } catch (e) {
          console.error("Failed to parse user from local storage", e);
          localStorage.removeItem("user");
        }
      }
      // Always try to refresh from API
      apiFetchProfile(token);
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  const login = (token: string, user: UserDto) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: "LOGIN",
      payload: {
        token,
        user,
      },
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

// 7. 自定义 Hook：方便在组件里使用
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
