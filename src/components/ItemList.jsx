import React from "react";
import { Link } from "react-router-dom";


function ItemList(){
    return(<>
    <h1>Item List</h1>
    <ul>
        <li><Link to="/items/1">item 1</Link></li>
        <li><Link to="/items/2">item 2</Link></li>
        <li><Link to="/items/3">item 3</Link></li>
    </ul>
    </>)
}

export default ItemList;