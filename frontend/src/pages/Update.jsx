import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Update = () => {
    const {product} = useLocation().state || {}
    const [name , setName]= useState()
    const[expDate, setDate]=useState()
    const[pPrice, setPprice]=useState()
    const[sPrice, setSprice]=useState()
    const [id, setId]=useState()
    const[info, setInfo]= useState({
        name:"",
        expDate:"",
        pPrice: "",
        sPrice: ""
    })
    useEffect(()=>{
     if(product){
        setInfo({
            name:product.name,
            expDate:product.expDate,
            pPrice:product.pPrice,
            sPrice:product.sPrice
        })
    }
    else{
        alert('product not found')
        // nav('/home')
    }
    },[product])

    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value });
        setName(info.name)
        setDate(info.expDate)
        setPprice(info.pPrice)
        setSprice(info.sPrice)
        setId(info.id)
    };
    function HandleUpdate(e){

       e.preventDefault()
       axios.put(`http://localhost:3000/products/${id}`, {name , expDate, pPrice, sPrice})
       .then((res)=>{
        alert('product Updated')
        console.log(res.data.name)
        // nav('/home')
       })
       .catch(err=>console.log('error we have', err))
    }
    
  return (
    <section className='flex flex-col gap-y-3'>
        <div className="flex justify-between p-5 px-7">
            <h1 className='text-xl font-bold'>PROJECT</h1>
            <div className="flex gap-x-4 justify-center items-center">
               <Link className='px-4 py-2 rounded hover:bg-gray-700 hover:text-white cursor-pointer bg-none border border-gray-800 text-gray-800' to="/home">Home</Link>
               <button className='px-4 py-2 rounded hover:bg-gray-800 cursor-pointer bg-gray-700 text-white'>Log out</button>
            </div>
        </div>  
        <div className="px-7 flex flex-col items-center">
            <h1 className='text-lg mb-4'>Update Product</h1>
            <form className='flex flex-col w-[400px] gap-y-3'>
                <div className="flex flex-col">
                    <label>Product Name</label>
                    <input type="text"
                    value={info.name}
                    className='p-2 border border-gray-400 outline-0 rounded' name='name' onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label>Exp. Date</label>
                    <input type="date" 
                    value={info.expDate}
                    className='p-2 border border-gray-400 outline-0 rounded' name='expDate' onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label>Purchasing Price [Frw]</label>
                    <input type="number"
                    value={info.pPrice}
                    className='p-2 border border-gray-400 outline-0 rounded' name='pPrice' onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label>Selling Price [Frw]</label>
                    <input type="number"
                    value={info.sPrice}
                    className='p-2 border border-gray-400 outline-0 rounded' name='sPrice' onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <button className='p-3 rounded cursor-pointer bg-gray-700 text-white' onClick={HandleUpdate}>Update product</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Update