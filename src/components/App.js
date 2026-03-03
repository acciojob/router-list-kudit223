
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetail";

const App = () => {
  return (
    <div id="main">
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/items/:id" element={<ItemDetails/>}/>
        </Routes>
    </div>
  )
}

export default App
