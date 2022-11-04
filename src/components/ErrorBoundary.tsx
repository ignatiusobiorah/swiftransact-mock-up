import { Component } from "react";
import "../styles/errorBoundary.scss";

interface ErrorBoundaryProps {
  children: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h1>Something went wrong !!!</h1>
          <a href="/about">
            <button>Redirect</button>
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
