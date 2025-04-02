import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LoadingSpinner, LoadingSpinnerProps } from '@/components/ui/loading-spinner';

interface LoadingContextType {
  isLoading: boolean;
  startLoading: (options?: Omit<LoadingSpinnerProps, 'className'>) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerProps, setSpinnerProps] = useState<Omit<LoadingSpinnerProps, 'className'>>({
    variant: 'arch',
    size: 'md',
    text: 'Loading...'
  });

  const startLoading = (options?: Omit<LoadingSpinnerProps, 'className'>) => {
    if (options) {
      setSpinnerProps({ ...spinnerProps, ...options });
    }
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <LoadingSpinner {...spinnerProps} />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}