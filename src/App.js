"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("p", null,
                "Edit ",
                react_1.default.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            "Hurray !!")));
}
exports.default = App;
