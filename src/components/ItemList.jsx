import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
    const items = [1, 2, 3]; 
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
            <li key={item}>
           
                <Link to={`/items/${item}`}>Item {item}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList;