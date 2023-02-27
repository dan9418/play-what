import React from "react";
import styled from "styled-components";
import ButtonInput from "../inputs/ButtonInput";
interface IErrorBoundaryState {
  hasError: boolean;
}

const StyledErrorPage = styled.section`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 512px;
    text-align: center;

    p {
      margin: 16px 0;
      color: ${({ theme }) => theme?.status?.error};
    }
  }
`;
class ErrorBoundary extends React.Component<unknown, IErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledErrorPage>
          <div>
            <h1>Sorry, something went wrong.</h1>
            <p>This app is still unstable and prone to errors.</p>
            <ButtonInput onClick={() => location.reload()}>Refresh</ButtonInput>
          </div>
        </StyledErrorPage>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
