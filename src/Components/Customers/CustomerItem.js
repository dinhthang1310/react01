import React from 'react'

const getStatus = (status) => {
    return (
        <button className={`btn btn-${status ? "success" : "danger"}`}>{status ? "Active" : "InActive"}</button>
    )
}
export default function CustomerItem({ name, email, status, index }) {
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{getStatus(status)}</th>
        </tr>
    )
}
