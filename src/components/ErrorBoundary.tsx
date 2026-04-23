import React from 'react';
import { Link } from 'react-router-dom';

interface State {
    hasError: boolean;
    errorMessage: string;
}

/**
 * React Error Boundary
 * Catches any unhandled JS runtime errors in the component tree
 * (e.g. undefined.map(), null access) and shows a graceful fallback
 * instead of a white screen. This is separate from axiosInstance error
 * handling — axiosInstance handles HTTP/network errors, this handles
 * React render-phase crashes.
 */
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
    state: State = { hasError: false, errorMessage: '' };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // Log to console for debugging; in production this would go to Sentry etc.
        console.error('Unhandled render error:', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
                        <i className="fas fa-exclamation-triangle text-red-500 text-3xl"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
                    <p className="text-gray-500 mb-8 max-w-md">
                        An unexpected error occurred. Please try refreshing the page.
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition font-medium"
                        >
                            Refresh Page
                        </button>
                        <Link
                            to="/"
                            onClick={() => this.setState({ hasError: false, errorMessage: '' })}
                            className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:border-gray-400 transition font-medium"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
