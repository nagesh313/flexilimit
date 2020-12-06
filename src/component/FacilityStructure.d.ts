import React from "react";
import "./FacilityStructure.css";
export declare class FacilityStructure extends React.Component<{}, {
    originalData: any;
    tableData: any;
    filters: any;
    addNewRow: boolean;
}> {
    newFacilityTypeRef: any;
    newLimitTypeRef: any;
    newProposedLimitCurrencyRef: any;
    newProposedLimitRef: any;
    newMaxTenorRef: any;
    newFacilityRef: any;
    newFacilityTypeValue: any;
    newLimitTypeValue: any;
    newProposedLimitCurrencyValue: any;
    newProposedLimitValue: any;
    newMaxTenorValue: any;
    newFacilityTableRow: {
        key: number;
        facilityType: string;
        facilityId: number;
        limitType: string;
        existingLimitsCurrency: string;
        existingLimits: string;
        proposedLimitsCurrency: string;
        proposedLimits: string;
        maxTenor: string;
        status: string;
    }[];
    constructor(props: any);
    handleDelete: (text: any, record: any, index: any) => void;
    handleEdit: (text: any, record: any, index: any) => void;
    handleAddNewFacilityRowClick: (text: any, record: any, index: any) => void;
    handleCloseNewFacilityRowClick: (text: any, record: any, index: any) => void;
    enableToggleNew(): void;
    render(): JSX.Element;
}
