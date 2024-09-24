import React, { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productData } from '../slices/Productslice'
import Productdetails from './Productdetails'

const Productcard = () => {
    const [ data , setdata] = useState ([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

// ========api function=========
  useEffect (()=>{
    fetch('https://api.jsonbin.io/v3/b/66eadcf1acd3cb34a886d2fd')
    .then(response => response.json())
    .then(json => setdata(json .record))
   
  } , [])
  console.log(data)

//   ======function ============
  const handelProduct =(details)=>{
    console.log(details)
    navigate('/Productdetails')
    dispatch (productData(details))
  }



  return (
    <>
    <div className="cards flex px-[60px] gap-12 flex-wrap mt-5">
       
     {
         data.map((item)=>(

            <div key={item.id} className="single_card w-[240px] drop-shadow-2xl hover:scale-[1.1] transition-[.4s]">
            <div className="single_card_img w-[240px] rounded-lg">
                <img className='w-[240px] h-[120px]' src={item.image} alt="img" />
            </div>
            <div className="single_card_text">
                <h1 className='text-2xl text-black font-serif font-semibold'>{item.graphics}</h1>
                <ul>
                    <li className='text-lg text-black font-serif font-medium'>ID:{item.id}</li>
                    <li className='text-lg text-black font-serif font-medium'>RAM:{item.ram}</li>
                    <li className='text-lg text-black font-serif font-medium'>Screen:{item.screen_size}</li>
                    <li className='text-lg text-black font-serif font-medium'>STORAGE:{item.storage}</li>
                    <li className='text-lg text-black font-serif font-medium'>OS:{item.os}</li>
                </ul>
                <span className='text-2xl text-green-700 font-serif font-semibold pt-[40px]'>{item.price}$</span>
            </div>
            <div className="single_card_button flex flex-col mt-6 gap-[12px]">
                <button className=' bg-green-700 py-[4px] px-[70px] rounded-lg active:scale-[1.1]'>BUY NOW</button>
                <button onClick={()=> handelProduct (item)} className=' bg-white border-solid border-[2px] border-black py-[4px] px-[70px] rounded-lg active:scale-[1.1]'>SEE MORE</button>
            </div>
        </div>


         ))
     }
       
    </div>
    
    </>
  )
}

export default Productcard