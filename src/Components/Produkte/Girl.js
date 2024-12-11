import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GiSeahorse } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

export default function Girl() {
    const [Girl, setGirl]= useState([])
    const GirlAPI = async () => {
        const {data} = await axios.get('http://localhost:8000/Girl')
        setGirl(data)
    }

    useEffect(() => {
      GirlAPI()
    } , [])

    const firstfour = Girl.slice(0 , 4)
    const remainingItems =Girl.slice(4)

  return (
    <div className='  flex flex-col items-center'>
      <section className=' w-5/6'>
        <div className=' flex justify-center pt-6'> 
            <GiSeahorse  size={80} />
        </div>
            <hr className=" h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </section> 

    <div className=' flex gap-8  justify-center  mx-auto w-5/6 h-10'>
        <a href='#'> <h3>Startseite</h3> </a>
        <a href='#'> <h3>Damen</h3> </a>
        <a href='#'> <h3>Herren</h3></a>
        <a href='#'><h3>Baby</h3></a>
        <a href='#'><h3>Kinder</h3></a>
        <a href='#'><h3>Zubehörteil</h3></a>
        <a href='#'><h3>Heim</h3></a>
        <a href='#'><h3>Familienset</h3></a>
        <a href='#'><h3>Blog</h3></a>
        <a href='#'><h3>Rabatt</h3></a>
        <a href='#'><h3><CiSearch size={30}/></h3></a>
    </div>
        <div className='flex gap-8'>
          {firstfour?.map((item , index) => (
            <div className='w-5/6 gap-9'>
              <img key={index} className=' flex rounded-lg w-[300px]' src={item.img} alt=""/>
              <p className=' text-xl leading-5 pt-4 h-[40px]'>{item.Name}</p>
              <p className=' text-gray-400  pb-2'>{item.Preis}</p>
            </div>
              ))} 
        </div>
        <div className=' flex  gap-8'>
          {remainingItems?.map((item, index) => (
            <div className='  w-5/6 gap-9'>
              <img key={index + 3} className=' flex rounded-lg w-[300px]' src={item.img} alt=""/>
              <p className=' text-xl leading-5 pt-4 h-[40px]'>{item.Name}</p>
              <p className=' text-gray-400 pb-2'>{item.Preis}</p>
            </div>
            ))} 
        </div>
    </div>
  )
}
