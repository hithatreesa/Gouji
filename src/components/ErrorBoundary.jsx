import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("GOUJI_SYSTEM_CRITICAL_FAILURE:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-12 bg-primary/5 rounded-4xl border border-primary/20 backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-2xl font-black text-text-primary mb-2 uppercase tracking-tighter italic">Component Isolated</h2>
          <p className="text-text-secondary text-sm text-center max-w-md mb-8">
            The Gouji Intelligence Layer has isolated a failure in this module to protect the core identity ecosystem.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Restart Core
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
