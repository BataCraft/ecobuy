import axios from "axios";
import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import ImageSlider from "./ImageSlider";


const ImageSliderAPI = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const [banner, setBanner] = useState([]);
    useEffect(()=>{
        const FetchBanner = async()=>{
            try {
                const bannerres = await axios.get('https://dummyjson.com/products?limit=5&skip=80&select=title,price,thumbnail')
                setBanner(bannerres.data.products)
                
            } catch (e) {
                console.error(e)
            }

        }
        FetchBanner();
    },[])

  return (
   <>

<Carousel responsive={responsive}>
   {
    banner.map((item, key)=>{
            return(
             <>

               <div className="flex ">
                <img src={item.thumbnail} alt="" className="size-[100%] md:w-[80%] lg:w-[80%] object-cover " />
             </div>


             
             
             </>
              
            )
        })
    }
    </Carousel>
   
   
   
   </>
  )
}

export default ImageSliderAPI