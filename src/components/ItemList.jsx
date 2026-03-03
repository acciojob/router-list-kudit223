import React from "react";
import { Link } from "react-router-dom";


function ItemList(){
    const items=[1,2,3];
    return(<div>
    <h1>Item List</h1>
    <ul>
      {items.map((item)=>{
        return <li key={item}><Link to= {`/items/${item}`}>item {item}</Link></li>
      })}  
    </ul>
    </div>)
}

export default ItemList;