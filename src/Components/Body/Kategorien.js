import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Kategorien() {
    const [Kategorien, setKategorien] = useState([])

    const KategorienAPI = async () => {
        const { data } = await axios.get('http://localhost:8000/Kategorien')
        setKategorien(data)
    }

    useEffect(() => {
        KategorienAPI()
    }, [])

    // برش دادن داده‌ها به دو دسته: سه آیتم اول و بقیه آیتم‌ها
    const firstfour = Kategorien.slice(0, 4)
    const remainingItems = Kategorien.slice(4)

    return (
      <div>
            <div className='flex gap-5  items-center justify-center h-56'>
                {firstfour.map((item, index) => (
                    <NavLink key={index}  to={"Shoe"} className='w-[200px] h-[160px] group'>
                        <img src={item.icon} className='w-full h-full' />
                        <p className='flex items-center gap-28 group-hover:bg-[#809a91]  group-hover:text-white px-2 bg-[#f4f3f3]'>{item.Name}<FaGreaterThan /></p>
                    </NavLink>
                ))}
            </div>
            <div className='flex gap-5 items-center justify-center mb-24'>
                {remainingItems.map((item, index) => (
                    <NavLink key={index + 3} to={"Shoe"} className='w-[200px] h-[160px] group'>
                        <img src={item.icon} className='w-full h-full' />
                        <p className='flex items-center gap-28 group-hover:bg-[#809a91]  group-hover:text-white px-2 bg-[#f4f3f3]'>{item.Name}<FaGreaterThan /></p>
                    </NavLink>
                ))}
            </div>
      </div>
    )
}
