import React from "react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import NotFound from "../../componenets/common/NotFound";

import CartDeteails from "../cart/CartDetails";
import { Routes, Route } from "react-router-dom";
import AddOrUpdate from "../products/AddOrUpdate";


function App() {
  return (
 
   
    <div>
      <Container>
        <Navi>
        </Navi>
        <Routes>
            <Route exact path="/" element={ <Dashboard />}></Route>
            <Route exact path="/cart" element={<CartDeteails />}></Route>
            <Route exact path="/saveproduct/:productId" element={<AddOrUpdate />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            </Routes>
       
      </Container>
    </div>
 
  );
}

export default App;
