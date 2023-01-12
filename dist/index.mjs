import React, { Component } from 'react';
import metismenujs from 'metismenujs';

class MetisMenu extends Component {
    componentDidMount() {
        this.mm = new metismenujs(this.el, this.props);
    }
    componentWillUnmount() {
        this.mm.dispose();
    }
    render() {
        const { subMenu, children, className } = this.props;
        const MMTag = subMenu || "ul";
        return (React.createElement(MMTag, { className: `metismenu ${className}`, ref: (el) => (this.el = el) }, children));
    }
}

export { MetisMenu as default };
