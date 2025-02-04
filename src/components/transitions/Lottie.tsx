import React, { useEffect, useState } from 'react';

export const LottieErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      const handleError = (error: ErrorEvent) => {
        console.error('Lottie animation error:', error);
        setHasError(true);
      };
  
      window.addEventListener('error', handleError);
      return () => window.removeEventListener('error', handleError);
    }, []);
  
    if (hasError) {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <p>Sending your request...</p>
        </div>
      );
    }
  
    return <>{children}</>;
  };