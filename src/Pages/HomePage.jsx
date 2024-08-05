

import DisplayProduct from '../Components/Card/DisplayProduct'
import ImageSliderAPI from '../Components/ImagesSlider/ImageSliderAPI'
import NavBar from '../Components/Navbar/NavBar'
import Cart from '../Components/Cart'
import { useState } from 'react'

const HomePage = () => {
  const [show, setShow ] = useState(true);
  const [cart, setCart] = useState([])
  return (
    <>
    <NavBar size={cart.length} />
    
   <div className='pt-[100px]'>
      <ImageSliderAPI />
  
      <DisplayProduct />
   </div>
    </>
  )
}

export default HomePage