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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityStructure = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var columns_1 = require("./columns");
var data_1 = require("./data");
require("./FacilityStructure.css");
var FacilityStructure = /** @class */ (function (_super) {
    __extends(FacilityStructure, _super);
    function FacilityStructure(props) {
        var _this = _super.call(this, props) || this;
        _this.newFacilityTableRow = [
            {
                key: 311,
                facilityType: "Import Invoice financing",
                facilityId: 313131,
                limitType: "Inner",
                existingLimitsCurrency: "USD",
                existingLimits: "500.00",
                proposedLimitsCurrency: "USD",
                proposedLimits: "500.00",
                maxTenor: "1 Year",
                status: "Changed",
            },
        ];
        _this.handleDelete = function (text, record, index) {
            console.log("delete");
            console.log(record);
            var dataSource = __spreadArrays(_this.state.tableData);
            _this.setState({
                tableData: dataSource.filter(function (item) { return item.key !== record.key; }),
            });
        };
        _this.handleEdit = function (text, record, index) {
            console.log("edit");
            console.log(record);
        };
        _this.handleAddNewFacilityRowClick = function (text, record, index) {
            console.log(_this.newFacilityRef);
            var newRow = {
                key: Math.round(Math.random() * 100),
                facilityType: _this.newFacilityRef.newFacilityTypeValue,
                facilityId: Math.round(Math.random() * 100),
                limitType: _this.newFacilityRef.newLimitTypeValue,
                existingLimitsCurrency: "USD",
                existingLimits: "0.00",
                proposedLimitsCurrency: _this.newFacilityRef.newProposedLimitCurrencyValue,
                proposedLimits: _this.newFacilityRef.newProposedLimitValue,
                maxTenor: _this.newFacilityRef.newMaxTenorValue,
                status: "New",
            };
            _this.setState({
                tableData: __spreadArrays([newRow], _this.state.tableData),
                addNewRow: !_this.state.addNewRow,
            });
        };
        _this.handleCloseNewFacilityRowClick = function (text, record, index) {
            console.log("handleCloseNewFacilityRowClick");
            console.log(record);
        };
        _this.state = {
            originalData: data_1.data,
            tableData: data_1.data,
            filters: [],
            addNewRow: true,
        };
        _this.newFacilityTypeRef = react_1.default.createRef();
        _this.newLimitTypeRef = react_1.default.createRef();
        _this.newProposedLimitCurrencyRef = react_1.default.createRef();
        _this.newProposedLimitRef = react_1.default.createRef();
        _this.newMaxTenorRef = react_1.default.createRef();
        _this.newFacilityTypeValue = "Import Facilities Bundle";
        _this.newLimitTypeValue = "Outer";
        _this.newProposedLimitCurrencyValue = "USD";
        _this.newProposedLimitValue = "";
        _this.newMaxTenorValue = "";
        _this.newFacilityRef = {
            newFacilityTypeRef: _this.newFacilityTypeRef,
            newLimitTypeRef: _this.newLimitTypeRef,
            newProposedLimitCurrencyRef: _this.newProposedLimitCurrencyRef,
            newProposedLimitRef: _this.newProposedLimitRef,
            newMaxTenorRef: _this.newMaxTenorRef,
            newFacilityTypeValue: _this.newFacilityTypeValue,
            newLimitTypeValue: _this.newLimitTypeValue,
            newProposedLimitCurrencyValue: _this.newProposedLimitCurrencyValue,
            newProposedLimitValue: _this.newProposedLimitValue,
            newMaxTenorValue: _this.newMaxTenorValue,
        };
        return _this;
    }
    FacilityStructure.prototype.enableToggleNew = function () {
        this.setState({ addNewRow: !this.state.addNewRow });
    };
    FacilityStructure.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_1.Card, { title: "Facility Structure" },
                react_1.default.createElement(antd_1.Table, __assign({ columns: columns_1.columns(this.handleDelete, this.handleEdit, this.handleAddNewFacilityRowClick, this.handleCloseNewFacilityRowClick, this.newFacilityRef), rowClassName: function (record, index, f) {
                        if (record.key === 311) {
                            return "new-facility-row-add";
                        }
                        return "";
                    }, rowSelection: {
                        hideSelectAll: true,
                        onChange: function (selectedRowKeys, selectedRows) {
                            console.log("selectedRowKeys: " + selectedRowKeys, "selectedRows: ", selectedRows);
                        },
                        onSelect: function (record, selected, selectedRows) {
                            console.log(record, selected, selectedRows);
                        },
                        checkStrictly: true,
                        preserveSelectedRowKeys: true,
                    }, dataSource: this.state.addNewRow
                        ? __spreadArrays(this.newFacilityTableRow, this.state.tableData) : __spreadArrays(this.state.tableData), onChange: function (pagination, filters, sorter, extra) {
                        console.log("params", pagination, filters, sorter, extra);
                    }, footer: function () {
                        return (react_1.default.createElement(antd_1.Button, { type: "dashed", block: true, onClick: _this.enableToggleNew.bind(_this) }, "+ Add Facility"));
                    } }, props)))));
    };
    return FacilityStructure;
}(react_1.default.Component));
exports.FacilityStructure = FacilityStructure;
var props = {
    className: "components-table-demo-nested",
    bordered: true,
    size: "small",
    pagination: false,
};
