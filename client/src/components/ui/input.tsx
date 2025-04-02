import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, trailingIcon, error, helperText, ...props }, ref) => {
    return (
      <div className="relative flex flex-col w-full">
        <div className={cn(
          "relative flex items-center w-full",
          error ? "text-red-500" : ""
        )}>
          {icon && (
            <div className="absolute left-3 flex items-center justify-center pointer-events-none text-gray-500">
              {icon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-md border bg-background text-sm ring-offset-background transition-colors",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
              "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
              icon ? "pl-10" : "px-4",
              trailingIcon ? "pr-10" : "px-4",
              error 
                ? "border-red-300 focus-visible:ring-red-500" 
                : "border-input hover:border-primary/50",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {trailingIcon && (
            <div className="absolute right-3 flex items-center justify-center text-gray-500">
              {trailingIcon}
            </div>
          )}
        </div>
        
        {helperText && (
          <p className={cn(
            "text-xs mt-1", 
            error ? "text-red-500" : "text-gray-500"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
