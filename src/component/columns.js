"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var Option = antd_1.Select.Option;
exports.columns = function (handleDelete, handleEdit, handleAddNewFacilityRowClick, handleCloseNewFacilityRowClick, newFacilityRef, newFacilityTypeValue) {
    return [
        {
            title: "Facility Types",
            dataIndex: "facilityType",
            key: 0,
            render: function (data, record, c) {
                return record.key === 311 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(antd_1.Select, { showSearch: true, style: { width: 200 }, placeholder: "Select a person", optionFilterProp: "children" },
                        react_1.default.createElement(Option, { value: "jack" }, "Jack"),
                        react_1.default.createElement(Option, { value: "lucy" }, "Lucy"),
                        react_1.default.createElement(Option, { value: "tom" }, "Tom")))) : (data);
            },
        },
        {
            title: "Facility ID",
            dataIndex: "facilityId",
            align: "center",
            key: "facilityId",
            render: function (data, record, c) {
                return record.key === 311 ? "" : data;
            },
        },
        {
            title: "Limit Type",
            dataIndex: "limitType",
            align: "center",
            key: 1,
            render: function (data, record, c) {
                return record.key === 311 ? (react_1.default.createElement(antd_1.Select, { defaultValue: "Outer", size: "small", onChange: function (value) {
                        newFacilityRef.newLimitTypeValue = value;
                    }, ref: newFacilityRef.newLimitTypeRef },
                    react_1.default.createElement(Option, { value: "Outer" }, "Outer"),
                    react_1.default.createElement(Option, { value: "Inner" }, "Inner"))) : (data);
            },
        },
        {
            title: "Existing Limits",
            align: "center",
            children: [
                {
                    title: "CCY",
                    width: 150,
                    dataIndex: "existingLimitsCurrency",
                    align: "center",
                    render: function (data, record, c) {
                        return record.key === 311 ? "USD" : data;
                    },
                },
                {
                    title: "000",
                    width: 150,
                    dataIndex: "existingLimits",
                    align: "right",
                    render: function (data, record, c) {
                        return record.key === 311 ? "0.00" : data;
                    },
                },
            ],
        },
        {
            title: "Proposed Limits",
            children: [
                {
                    title: "CCY",
                    dataIndex: "proposedLimitsCurrency",
                    align: "center",
                    width: 150,
                    render: function (data, record, c) {
                        return record.key === 311 ? (react_1.default.createElement(antd_1.Select, { defaultValue: "USD", size: "small", onChange: function (value) {
                                newFacilityRef.newProposedLimitCurrencyValue = value;
                            }, ref: newFacilityRef.newProposedLimitCurrencyRef },
                            react_1.default.createElement(Option, { value: "USD" }, "USD"),
                            react_1.default.createElement(Option, { value: "INR" }, "INR"),
                            react_1.default.createElement(Option, { value: "SGD" }, "SGD"))) : (data);
                    },
                },
                {
                    title: "000",
                    dataIndex: "proposedLimits",
                    width: 150,
                    align: "right",
                    render: function (data, record, c) {
                        return record.key === 311 ? (react_1.default.createElement(antd_1.Input, { size: "small", onChange: function (event) {
                                newFacilityRef.newProposedLimitValue =
                                    event.currentTarget.value;
                            }, ref: newFacilityRef.newProposedLimitRef })) : (data);
                    },
                },
            ],
        },
        {
            title: "Max Tenor",
            align: "center",
            dataIndex: "maxTenor",
            width: 150,
            render: function (data, record, c) {
                return record.key === 311 ? (react_1.default.createElement(antd_1.Input, { onChange: function (event) {
                        newFacilityRef.newMaxTenorValue = event.currentTarget.value;
                    }, size: "small", ref: newFacilityRef.newMaxTenorRef })) : (data);
            },
        },
        {
            title: "Status",
            align: "center",
            dataIndex: "status",
            onFilter: function (value, record) {
                var data = record.children.filter(function (e) { return e.status.toLocaleLowerCase() === value; });
                return data.length > 0;
            },
            render: function (data, record, c) {
                return record.key === 311 ? "New" : data;
            },
            filters: [
                {
                    text: "Changed",
                    value: "changed",
                },
                {
                    text: "Unchanged",
                    value: "unchanged",
                },
            ],
        },
        {
            title: "Action",
            align: "center",
            render: function (text, record, index) {
                return record.key === 311 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(antd_1.Button, { key: "add-new-row" + record.key, size: "small", style: { marginRight: "15px" }, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: handleAddNewFacilityRowClick.bind(_this, text, record, index) }),
                    react_1.default.createElement(antd_1.Button, { size: "small", key: "close-new-row" + record.key, icon: react_1.default.createElement(icons_1.CloseOutlined, null), onClick: handleCloseNewFacilityRowClick.bind(_this, text, record, index) }))) : text.children === undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(antd_1.Button, { size: "small", key: "edit-row" + record.key, className: "edit-btn", icon: react_1.default.createElement(icons_1.EditOutlined, null), onClick: handleEdit.bind(_this, text, record, index), style: { marginRight: "15px" } }),
                    react_1.default.createElement(antd_1.Button, { size: "small", key: "ellipsis-row" + record.key, className: "ellipsis-btn", icon: react_1.default.createElement(icons_1.EllipsisOutlined, null), onClick: handleEdit.bind(_this, text, record, index) }))) : (react_1.default.createElement(antd_1.Button, { key: "delete-row" + record.key, size: "small", className: "delete-btn", icon: react_1.default.createElement(icons_1.DeleteOutlined, null), onClick: handleDelete.bind(_this, text, record, index) }));
            },
        },
    ];
};
