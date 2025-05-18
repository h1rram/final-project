import React from 'react'
import { Link } from 'react-router-dom'
const New = () => {
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
            <h1 className='text-lg mb-4'>New Product</h1>
            <form className='flex flex-col w-[400px] gap-y-3'>
                <div className="flex flex-col">
                    <label>Product Name</label>
                    <input type="text" className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Exp. Date</label>
                    <input type="date" className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Purchasing Price [Frw]</label>
                    <input type="number" className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Selling Price [Frw]</label>
                    <input type="number" className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <button className='p-3 rounded cursor-pointer bg-gray-700 text-white'>Add product</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default New