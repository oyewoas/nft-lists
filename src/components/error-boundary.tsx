import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const handleErrors = (event: ErrorEvent) => {
      setErrorState({
        hasError: true,
        error: event.error,
      });
    };

    window.addEventListener('error', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
    };
  }, []);

  if (errorState.hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{errorState.error?.message}</p>
      </div>
    );
  }

  return children
};

export default ErrorBoundary;
