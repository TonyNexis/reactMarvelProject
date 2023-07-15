import { Component } from "react";
import ErrorMessgae from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log(error. errorInfo)
        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessgae/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;