import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
 
  const{productId} = useParams();
  const{products , currency ,addToCart } = useContext(ShopContext)
  const[productdata,setProductData] = useState(false)
  const[image,setImage] = useState('')
  const[size,setSize] = useState([])

  const fetchproductdata =  async() => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }
   
  useEffect(()=>{
    fetchproductdata()
  },[productId])

  return productdata ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}
        <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item,idx)=>(
                <img onClick={()=>setImage(item)} src={item} key={idx} alt="" srcset="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          {/* main image */}
          <div className='w-full sm:w-[80%] '>
            <img src={image} className='w-full h-auto' alt="" srcset="" />
          </div>
        </div>
        {/* PRODUCT INFO */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 ' alt="" />
            <img src={assets.star_icon} className='w-3 ' alt="" />
            <img src={assets.star_icon} className='w-3 ' alt="" />
            <img src={assets.star_icon} className='w-3 ' alt="" />
            <img src={assets.star_dull_icon} className='w-3 ' alt="" />

            <p className='pl-2'>(122)</p>
          </div>
          <p className='font-medium text-3xl mt-5'>{currency}{productdata.price}</p>
          <p className='text-gray-500 mt-5 md:w-4/5 '>{productdata.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productdata.sizes.map((item,idx) => (
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-gray-600' : '' }`} key={idx}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productdata._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-800'>ADD TO CART</button>
          <hr className='sm:w-4/5 mt-8' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on is delivery available.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* -----DESCRIPTION AND REVIEWS SECTION */}
      <div className='mt-20'>

        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>An e-commerce website  is an online platform that facilitates the buying and selling of products and services over the internet .
          It serves as a virtual marketplace where business and individuals can showcase their products, interact with customers , and conduct
          transactions without needs for a physical presence. E-commerce website have gained immense popularity due to their convenience , 
          accesibility and the global react they offer.
        </p>
        <p>E-commerce website typically display products or services along with detailed descriptions , images , prices and any other 
          variations (eg. sizes  , colors) . Each products usually have it's own dedicated page with relevant informations .
        </p>
      </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts category={productdata.category} subcategory={productdata.subcategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
