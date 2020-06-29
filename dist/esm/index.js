import { __extends } from "tslib";
import React, { Component } from "react";
import metismenujs from 'metismenujs';
var MetisMenu = /** @class */ (function (_super) {
    __extends(MetisMenu, _super);
    function MetisMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetisMenu.prototype.componentDidMount = function () {
        this.mm = new metismenujs(this.el, this.props);
    };
    MetisMenu.prototype.componentWillUnmount = function () {
        this.mm.dispose();
    };
    MetisMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, subMenu = _a.subMenu, children = _a.children;
        var MMTag = subMenu || 'ul';
        return (React.createElement(MMTag, { ref: function (el) { return _this.el = el; } }, children));
    };
    return MetisMenu;
}(Component));
export default MetisMenu;
