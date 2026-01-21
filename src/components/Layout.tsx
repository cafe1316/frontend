import { Outlet } from "react-router-dom";
import Header from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="gradient-bg flex justify-center min-h-screen w-full">
      {/* 内部容器：限制最大宽度 1440px，白色背景，阴影 */}
      <div className="w-full max-w-[1440px] bg-white shadow-lg flex flex-col min-h-screen">
        <Header />
        {/* Outlet 用于渲染当前路由匹配的子页面组件 */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
