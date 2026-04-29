import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'cancel' | 'secondary';
  isLoading?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  
  // Варіанти оформлення та ховерів
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-xl active:scale-95 shadow-green-900/20",
    outline: "border border-primary text-primary hover:bg-primary-light",
    cancel: "bg-border text-foreground hover:bg-[#D1D1D1]",
    secondary: "bg-background text-primary border border-primary hover:bg-primary  hover:text-white ",
  };

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
             {/* Тут твій лоадер */}
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};