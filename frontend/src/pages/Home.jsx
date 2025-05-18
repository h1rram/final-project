import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    const[products, setProduct]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3000/products')
      .then(res=>{
        setProduct(res.data)
      })
      .catch(err=>{
        console.log('error we have', err)
      });
    },[])

    function HandleDelete(id){
      if (confirm('Are sure u want to delete')) {
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(() => {
            alert('Product deleted')
            setProduct(products.filter(product=> product.id !== id))
        })
        .catch(err=> console.log(err))
      }
    }
  return (
    <section className='flex flex-col gap-y-3'>
        <div className="flex justify-between p-5 px-7">
            <h1 className='text-xl font-bold'>PROJECT</h1>
            <div className="flex gap-x-4 justify-center items-center">
               <Link className='px-4 py-2 rounded hover:bg-gray-700 hover:text-white cursor-pointer bg-none border border-gray-800 text-gray-800' to="/new">+ Add</Link>
               <button className='px-4 py-2 rounded hover:bg-gray-800 cursor-pointer bg-gray-700 text-white'>Log out</button>
            </div>
        </div>
        <div className="px-7 flex flex-col">
            <h1 className='text-lg mb-4'>Products List</h1>
            <table>
                <thead  className='h-14'>
                    <tr className='mb-4'>
                        <th className='text-start'>Product</th>
                        <th className='text-start'>Expiring date</th>
                        <th className='text-start'>Purchasing price</th>
                        <th className='text-start'>Selling price</th>
                        <th className='text-start'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                    <tr key={index} className='hover:bg-gray-100 h-14'>
                        <td>{product.name}</td>
                        <td>{product.expDate}</td>
                        <td>{product.pPrice}</td>
                        <td>{product.sPrice}</td>
                        <div className="flex gap-x-2 items-center h-14">
                            <Link to={`/update/${product.id}`} 
                            state={{product}}
                            className='px-4 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-gray-600'>Edit</Link>
                            <button 
                            onClick={()=>HandleDelete(product.id)}
                            className='px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600'>Delete</button>
                        </div>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Home