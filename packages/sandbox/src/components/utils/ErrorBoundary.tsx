import React from "react";
interface IErrorBoundaryState {
	error: any;
	errorInfo: any;
}
class ErrorBoundary extends React.Component<unknown, IErrorBoundaryState> {
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
						{JSON.parse(this.state.error.name, null)}
					</pre>
					<pre>
						{JSON.parse(this.state.errorInfo.componentStack, null)}
					</pre>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
