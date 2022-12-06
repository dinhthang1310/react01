import React from 'react'

export default function MemberInfo({ name, email }) {
    return (
        <div className='member_info'>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    )
}
