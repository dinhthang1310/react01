import React from 'react';
import Members from "../src/Components/Props/Members"

export default function App() {
    const member = {
        info: {
            name: "thag",
            email: 'thang@gmail.com'
        },
        avatar: {
            src: 'https://picsum.photos/200/300.jpg',
            alt: 'ảnh của tôi',
            width: '200',
            height: '150',
            style: {
                boxShadow: "3px 3px 3px 5px #ccc",
                borderRadius: "10px"
            }
        },
        post: [
            {
                id: 1,
                title: 'Bài 1'
            },
            {
                id: 2,
                title: 'Bài 2'
            },
            {
                id: 3,
                title: 'Bài 3'
            },
        ]
    }
    return (
        <Members {...member} />
    )
}
