import React, { useState, useEffect } from 'react';
import NavBar from './Navbar/NavBar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItemsKey')) || [];
    setCartItems(items);
  }, []);

  const updateQuantity = (index, change) => {
    const updatedItems = [...cartItems];
    const newQuantity = Math.max(1, updatedItems[index].quantity + change);
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    localStorage.setItem('cartItemsKey', JSON.stringify(updatedItems));
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem('cartItemsKey', JSON.stringify(updatedItems));
  };

  return (
    <>
      <NavBar />

     <div  className='flex pt-[50px] '>
        <div className='container mx-auto pt-24 px-4'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>S.N</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Image</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Name</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Quantity</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <img src={item.thumbnail} alt={item.title} className="h-20 w-20 rounded-full object-cover" />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.title}</td>
                    <td className='py-10 whitespace-nowrap flex items-center justify-center gap-4'>
                      <button 
                        className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                      <div className='text-black'>{item.quantity}</div>
                      <button 
                        className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <button 
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">$9,000</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">$30</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$35</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                                            </div>
                                            <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            
     </div>
    </>
  );
};

export default Cart;