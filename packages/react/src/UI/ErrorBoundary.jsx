import * as React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className='error-boundary' style={{ color: 'red' }}>
                    Sorry, something went wrong.
                    <pre>
                        {JSON.parse(this.state.error.name, null, 2)}
                    </pre>
                    <pre>
                        {JSON.parse(this.state.errorInfo.componentStack, null, 2)}
                    </pre>
                </div>
            );
        }
        return this.props.children;
    }
}