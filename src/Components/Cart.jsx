import React, { useState, useEffect } from 'react';
import NavBar from './Navbar/NavBar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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

     <div className='flex pt-[100px]'>
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

        <div>
            <h1>check out page</h1>

        </div>
     </div>
    </>
  );
};

export default Cart;