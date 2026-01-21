// /Users/hindaho/frontend/src/components/Button.tsx

import React from "react";

// 定义组件属性：继承原生 button 的所有属性 (如 onClick, type, disabled)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"; // 只有两种风格：实心红 / 空心红
  rounded?: "full" | "lg"; // 只有两种圆角：全圆(胶囊) / 大圆角(表单)
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary", // 默认实心红
  rounded = "full", // 默认全圆角 (你喜欢的那个)
  className = "",
  children,
  ...props
}) => {
  // 1. 基础样式：包含你喜欢的动画 (hover:scale-105)
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-transform duration-300 hover:scale-105 focus:outline-none disabled:opacity-50";

  // 2. 风格样式
  const variantStyle =
    variant === "primary"
      ? "bg-red-500 text-white hover:bg-red-600 shadow-md border-2 border-transparent"
      : "bg-transparent text-red-500 border-2 border-red-500 hover:bg-red-50";

  // 3. 圆角样式
  const roundedStyle = rounded === "full" ? "rounded-full" : "rounded-lg";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${roundedStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
