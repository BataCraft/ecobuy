import React, { useEffect, useState } from 'react'
import Card from './Card'

import '../Card/Card.css'
import axios from 'axios'
import { Loading } from '../Loading'

const DisplayProduct = ({item, id}) => {
const [product, setProduct] = useState([])
const[isloding, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
   const fetchproduct = async ()=>{
      try {
         const res = await axios.get('https://dummyjson.com/products')
         setProduct(res.data.products)
         setLoading (false)
         
      } catch (error) {
         
      }
   }
   fetchproduct()
},[])

  return (
   <>

<div id="wrapper" className="flex flex-wrap justify-center gap-8 px-8">
   {
      isloding && <Loading />
   }
      {product.map((item) => (
        <div key={item.id}>
          <Card 
            thumbnail={item.thumbnail} 
            title={item.title} 
            rating={item.rating} 
            price={item.price} 
            id={item.id} 
            // category={item.category}
          />
        </div>
      ))}
    </div>
      



    
   </>
  )
}

export default DisplayProduct