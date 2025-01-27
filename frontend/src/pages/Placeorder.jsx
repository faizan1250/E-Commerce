import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {

  const[method,setMethod] = useState("COD")
  const{ navigate } = useContext(ShopContext)
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'required />
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <input type="email" placeholder='E-mail address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        <input type="text" placeholder='Current address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />

        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'required />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <div className='flex gap-3'>
          <input type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'required />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <input type="number" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />

      </div>

      {/* -----right side ----- */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'> 
        <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* PAYMENT MEETHOD SECTION */}
          <div className='flex gap-3 flex-col lg:flex-row'>

            <div onClick={()=> setMethod("STRIPE")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'STRIPE' ? 'bg-green-600' : ""}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" srcset="" />
            </div>

            <div onClick={()=> setMethod("RAZOR")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'RAZOR' ? 'bg-green-600' : ""}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" srcset="" />
            </div>

            <div onClick={()=> setMethod("COD")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'COD' ? 'bg-green-600' : ""}`}></p>
              <p className='text-sm text-gray-500 font-medium mx-4'>CASH ON DELIVERY</p>
            </div> 

          </div>

           {/*ORDER BUTTON  */}

           <div className='w-full text-end mt-8'>
              <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>
              
        </div>

      </div>
      

    </div>
  )
}

export default Placeorder
