import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../src/Components/Cart"
import Profile from "../src/Components/Profile"
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";

export const MyRoutes = () => {
  return (
   
        <>
        <Router>
         <Routes>
            <Route path="/" element={<HomePage/>} />
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/cart" element={<Profile/>}/>
             <Route path="/productdetail/:productId" element={<ProductDetails/>} /> 
         </Routes>
     
        </Router>
        
        
        
        </>
       )
  
}
