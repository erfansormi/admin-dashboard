import * as React from "react";

// components
import TitlePage from "../TitlePage/TitlePage";
import CustomersTable from "./CustomersTable/CustomersTable";

export default function Customers() {
    return (
        <>
            <TitlePage category="page" title="customers" />
            <CustomersTable />
        </>
    );
}