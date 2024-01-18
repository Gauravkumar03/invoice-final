import React from 'react'

const Row = ({item, handleDelete}) => {
    return (
        
            <tr key={item.id}>
                <td>{item.desc}</td>
                <td>{item.qty}</td>
                <td>{item.rate}</td>
                <td>{item.amount}</td>
                <td className='delete-icon'><button id="btn" onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
    )
}

export default Row