import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";

// 1. 定义状态类型
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: { email: string } | null;
  isLoading: boolean;
}

// 2. 定义操作类型 (Action)
type AuthAction =
  | { type: "LOGIN"; payload: { token: string; email: string } }
  | { type: "LOGOUT" }
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
        user: { email: action.payload.email },
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
  login: (token: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 6. Provider 组件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({
          type: "LOGIN",
          payload: {
            token,
            email: user.email,
          },
        });
      } catch (e) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "SET_LOADING", payload: false });
      }
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  const login = (token: string, email: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({ email }));

    dispatch({
      type: "LOGIN",
      payload: {
        token,
        email,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
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
