import React from 'react'

export default function Post({ post }) {
    return (
        <div>
            <h2>
                Danh sách bài đăng

            </h2>
            {post.map(({ id, title }) => (
                <p key={id}>{title}</p>
            ))}
        </div>
    )
}
