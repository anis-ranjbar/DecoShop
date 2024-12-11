import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


        export default function Kleidung() {
            const [Kleidung, setKleidung] = useState([])
            const KleidungAPI = async () => {
                const {data} = await axios.get('http://localhost:8000/kleidung')
                setKleidung(data)
            }

    useEffect(() => {
        KleidungAPI()
    }, [])

    const firstTwo = Kleidung.slice(0, 2)
    const remainingItems = Kleidung.slice(2)

    return (
        <div className='flex flex-col items-center justify-center min-h-screen mt-16'>
            <div className='flex flex-wrap items-center justify-center gap-7 mb-5'>
                {firstTwo.map((item, index) => (
                    <NavLink key={index} to={item.to} className='text-[#54786a]'>
                        <img src={item.image} className='max-w-xl' />
                    </NavLink>
                ))}
            </div>

            <div className='flex flex-wrap items-center justify-center gap-7'>
                {remainingItems.map((item, index) => (
                    <NavLink key={index + 2} to={"produkte"} className='text-[#54786a]'>
                        <img src={item.image} className='max-w-xl' />
                    </NavLink>
                ))}
            </div>
        </div>
    )
                }
