import React, {Component} from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error('❌ Error caught by boundary:', error);
    }

    render() {
        if ( this.state.hasError ) {
            return <h2>😵 문제가 발생했습니다. 다시 시도해주세요.</h2>;
        }

        return this.props.children;
    }
}