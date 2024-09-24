import React from 'react'
import mypic from '../assets/pic.jpg'
import { useSelector } from 'react-redux'

const Productdetails = () => {
    const slicedata = useSelector((state)=> state.counter.value)
    console.log (slicedata)



  return (
    <>
      <div className="container mx-auto px-4 py-8">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Product Image --> */}
        <div className="p-4">
          <img
            src={slicedata.image}
            // <!-- Replace with actual image -->
            alt="Golden Field GF-M101 Mouse"
            className="w-full h-96 object-contain hover:scale-[1.1] transition-[.4s]"
          />
        </div>

        {/* <!-- Product Details --> */}
        <div className="p-6 flex flex-col justify-between">
          {/* <!-- Product Name --> */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{slicedata.graphics}</h2>

          {/* <!-- Product Specifications --> */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Specifications</h3>
            <ul className="text-gray-600">
              <li><strong>ID:</strong> {slicedata.id}</li>
              <li><strong>RAM:</strong> {slicedata.ram}</li>
              <li><strong>SCREEN:</strong> {slicedata.screen_size}</li>
              <li><strong>STORAGE:</strong> {slicedata.storage}</li>
              <li><strong>OS:</strong> {slicedata.os}</li>
              <li><strong>Cable Length:</strong> 1.5 meters</li>
            </ul>
          </div>

          {/* <!-- Product Price & Buy Button --> */}
          <div className="mt-6 flex items-center">
            <span className="text-2xl font-bold text-gray-900">{slicedata.price}$</span>
            <button className="ml-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </>
  )
}

export default Productdetails

