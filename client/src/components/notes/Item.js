import React from 'react'

export default function NoteItem(props) {

    const { name, id, removeHandle } = props
    return (
        <ul>
            <li>{name}<button className="btn btn-danger"onClick={() => {
                const confirm = window.confirm('Are you sure?')
                if (confirm) {
                    removeHandle(id)
                }
            }}>remove</button></li>
        </ul>)
}