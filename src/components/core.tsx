"use client";

import React, { useState, useEffect, useContext, Component, ReactNode } from 'react';

// TypeScript interfaces
interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface TabsProps extends BaseProps {
  value: string;
  onValueChange: (value: string) => void;
}

interface TabsTriggerProps extends BaseProps {
  value: string;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent: React.ComponentType<{ error: Error }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorFallbackProps {
  error: Error;
}

interface TabsContextType {
  activeTab: string;
  handleTabChange: (value: string) => void;
}

// Card Components
const Card: React.FC<BaseProps> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<BaseProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<BaseProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent: React.FC<BaseProps> = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Tabs Components
const TabsContext = React.createContext<TabsContextType>({
  activeTab: '',
  handleTabChange: () => { }
});

const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(value);

  useEffect(() => {
    setActiveTab(value);
  }, [value]);

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<BaseProps> = ({ children, className = '' }) => (
  <div className={`flex space-x-2 border-b ${className}`}>
    {children}
  </div>
);

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className = '' }) => {
  const { activeTab, handleTabChange } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors
        ${isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}
        ${className}`}
      onClick={() => handleTabChange(value)}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return <div>{children}</div>;
};

// Error Boundary Component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}

// Loading and Error Components
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center w-full h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => (
  <div className="text-center p-6 bg-red-50 rounded-lg">
    <h2 className="text-lg font-bold text-red-600 mb-2">Something went wrong</h2>
    <p className="text-sm text-red-500">{error.message}</p>
  </div>
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  ErrorBoundary,
  LoadingSpinner,
  ErrorFallback
};