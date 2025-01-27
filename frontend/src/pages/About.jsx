import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
    <div className='flex flex-col md:flex-row gap-16 my-10'>

        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" srcset="" />
        <div className='flex flex-col justify-center md:w-2/4 gap-6 text-gray-600'>
      <p>Forever was born out of passion for innovation and a desire to revolutionize 
        the way people shop online. Our journey began with a simple idea : to provide 
        a platform where customers can easily discover, explor and purchase a wide range
        of products from their comfort from their homes</p>
      <p>Since our inception, we've worked tirelessly to curate a diverse selection of high
        quality of products that cater every taste and preference. From fashion and beauty to 
        electronics and home essentials , we offer an extensive collection sourced from trusted brands
        and suppliers. 
      </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission at forever is to empower with choice and convenience, and confidence.We're dedicated
        to providing seamless shopping experience that exceeds expectations, from browsing and odering to 
        delivery and beyonds.
      </p>
      </div>

    </div>

    <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex  flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p>We meticulosly select and met each product to ensure it mights our stringent quality standards. </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p>Our team of dedicated proffessional is here to assist you the way, ensuring your satisfaction is our top priority </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p>With our user-friendly interface and hassle free ordering process, shopping has never been easier </p>
      </div>
    </div>  

   <Newsletterbox/>
   
    </div>
  )
}

export default About
