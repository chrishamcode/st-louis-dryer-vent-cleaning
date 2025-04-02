import React from 'react';
import { cn } from '@/lib/utils';

export interface LoadingSpinnerProps {
  variant?: "arch" | "riverboat" | "clocktower";
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function LoadingSpinner({
  variant = "arch",
  size = "md",
  className,
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };
  
  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const renderSpinner = () => {
    switch (variant) {
      case "arch":
        return (
          <svg 
            className={cn("animate-pulse text-primary", sizeClasses[size], className)} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 80 C 40 0, 60 0, 90 80" 
              stroke="currentColor" 
              strokeWidth="6" 
              strokeLinecap="round" 
              fill="none"
            />
            <rect x="5" y="80" width="90" height="6" rx="2" fill="currentColor" />
            <circle 
              cx="50" 
              cy="40" 
              r="5" 
              fill="currentColor" 
              className="animate-bounce opacity-70" 
            />
          </svg>
        );
        
      case "riverboat":
        return (
          <svg 
            className={cn("animate-pulse text-primary", sizeClasses[size], className)} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Water waves animation */}
            <path 
              d="M5 75 C15 70, 25 80, 35 75 C45 70, 55 80, 65 75 C75 70, 85 80, 95 75" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              className="animate-pulse" 
            />
            
            {/* Boat hull */}
            <path 
              d="M20 65 L80 65 L75 75 L25 75 Z" 
              fill="currentColor" 
            />
            
            {/* Boat cabin */}
            <rect x="30" y="55" width="40" height="10" fill="currentColor" />
            
            {/* Boat wheel animation */}
            <circle 
              cx="70" 
              cy="60" 
              r="5" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="animate-spin opacity-90" 
            />
            
            {/* Boat chimney with animated smoke */}
            <rect x="45" y="45" width="10" height="10" fill="currentColor" />
            <circle 
              cx="50" 
              cy="35" 
              r="3" 
              fill="currentColor" 
              className="animate-ping opacity-60" 
            />
          </svg>
        );
        
      case "clocktower":
        return (
          <svg 
            className={cn("animate-pulse text-primary", sizeClasses[size], className)} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tower base */}
            <rect x="35" y="55" width="30" height="35" fill="currentColor" />
            
            {/* Tower top */}
            <path 
              d="M30 55 L50 30 L70 55 Z" 
              fill="currentColor" 
            />
            
            {/* Clock face */}
            <circle 
              cx="50" 
              cy="45" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="white" 
            />
            
            {/* Clock hands */}
            <line 
              x1="50" 
              y1="45" 
              x2="50" 
              y2="38" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className="animate-spin origin-bottom" 
              style={{ animationDuration: '6s' }}
            />
            <line 
              x1="50" 
              y1="45" 
              x2="57" 
              y2="45" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className="animate-spin origin-left" 
              style={{ animationDuration: '60s' }}
            />
          </svg>
        );
        
      default:
        return (
          <svg 
            className={cn("animate-spin text-primary", sizeClasses[size], className)} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {renderSpinner()}
      {text && (
        <p className={cn("text-center text-gray-600 font-medium", textSizeClasses[size])}>
          {text}
        </p>
      )}
    </div>
  );
}