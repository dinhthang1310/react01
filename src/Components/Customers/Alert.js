import React from 'react'

export default function Alert({ content, cols, type = "danger" }) {
    return (
        <td colSpan={cols} className="text-center">
            <div className={`alert alert-${type}`}>
                {content}
            </div>
        </td>

    )
}
