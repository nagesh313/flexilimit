"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityTypeMenu = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var SubMenu = antd_1.Menu.SubMenu;
var FacilityTypeMenu = /** @class */ (function (_super) {
    __extends(FacilityTypeMenu, _super);
    function FacilityTypeMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacilityTypeMenu.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(antd_1.Menu, { onClick: function (event) {
                // document.getElementById("input-text").value = event.key;
                document.getElementById("input-text").value = event.key;
                _this.props.handleChange(event);
            }, mode: "vertical", style: { width: 120 } },
            react_1.default.createElement(SubMenu, { key: "Trade", title: "Trade" },
                react_1.default.createElement(SubMenu, { key: "Bundles", title: "Bundles" },
                    react_1.default.createElement(antd_1.Menu.Item, { key: "Import Facilities" }, "Import Facilities")),
                react_1.default.createElement(SubMenu, { key: "21", title: "Products" },
                    react_1.default.createElement(antd_1.Menu.Item, { key: "Product 1" }, "Product 1"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "Product 2" }, "Product 2"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "Product 3" }, "Product 3"))),
            react_1.default.createElement(SubMenu, { key: "sub2", title: "Cash" },
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 5" }, "Option 5"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 6" }, "Option 6")),
            react_1.default.createElement(SubMenu, { key: "sub4", title: "Lending" },
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 9" }, "Option 9"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 10" }, "Option 10"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 11" }, "Option 11"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 12" }, "Option 12")),
            react_1.default.createElement(SubMenu, { key: "sub5", title: "FM" },
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 13" }, "Option 13"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 14" }, "Option 14"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 15" }, "Option 15"),
                react_1.default.createElement(antd_1.Menu.Item, { key: "Product 16" }, "Option 16"))));
    };
    return FacilityTypeMenu;
}(react_1.default.Component));
exports.FacilityTypeMenu = FacilityTypeMenu;
