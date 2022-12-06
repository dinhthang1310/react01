import React from 'react'
import Avatar from './Avatar'
import MemberInfo from './MemberInfo';
import Post from './Post'

export default function Members({ info, avatar, post }) {
    return (

        <div className='members'>
            <MemberInfo {...info} />
            <Avatar {...avatar} />
            <Post post={post} />
        </div>


    )
}
