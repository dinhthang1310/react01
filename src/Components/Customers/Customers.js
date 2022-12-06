import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data.json";
import CustomerItem from './CustomerItem';
import Alert from './Alert';
import "./Customers.scss";


export default function Customers() {
    const { customers } = Data;
    const newCustomers = customers?.length ? customers.map?.((customer, index) => (
        <CustomerItem {...customer} index={index} key={customer.id} />
    )) : <tr>
        <Alert content={"không có dữ liệu"} cols={4} />
    </tr>

    return (
        <>

            <table className="table customer" >
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {newCustomers}

                </tbody>
            </table>
        </>

    )
}
