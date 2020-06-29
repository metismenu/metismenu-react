'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
var React = require('react');
var React__default = _interopDefault(React);
var metismenujs = _interopDefault(require('metismenujs'));

var MetisMenu = /** @class */ (function (_super) {
    tslib.__extends(MetisMenu, _super);
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
        return (React__default.createElement(MMTag, { ref: function (el) { return _this.el = el; } }, children));
    };
    return MetisMenu;
}(React.Component));

module.exports = MetisMenu;
