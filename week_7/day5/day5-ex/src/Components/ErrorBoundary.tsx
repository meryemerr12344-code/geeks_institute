import React, { Component } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log("Error:", error);
    console.log("Info:", info);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occured..</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;