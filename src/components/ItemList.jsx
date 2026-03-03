import React from "react";
import { Link } from "react-router-dom";


function ItemList(){
    const items=[1,2,3];
    return(<>
    <h1>Item List</h1>
    <ul>
      {items.map((item,index)=>{
        return <li key={index}><Link to= {`/items/${item}`} >item {item}</Link></li>
      })}  
    </ul>
    </>)
}

export default ItemList;