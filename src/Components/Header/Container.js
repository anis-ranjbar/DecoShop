import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Container() {
  return (
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
  )
}
