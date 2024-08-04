

import DisplayProduct from '../Components/Card/DisplayProduct'
import ImageSliderAPI from '../Components/ImagesSlider/ImageSliderAPI'
import NavBar from '../Components/Navbar/NavBar'

const HomePage = () => {
  return (
    <>
    <NavBar />
    
   <div className='pt-[100px]'>
      <ImageSliderAPI />
  
      <DisplayProduct />
   </div>
    </>
  )
}

export default HomePage