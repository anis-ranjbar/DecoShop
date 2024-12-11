import React from 'react'
import Navbar from './Header/Navbar'
import Container from './Header/Container'
import Swipers from './Header/Swipers'
import Kleidung from './Body/Kleidung'
import Versand from './Body/Versand'
import Kategorien from './Body/Kategorien'
import Rabatt from './Body/Rabatt'
import Neueste from './Body/Neueste'
import Footer from './Footer/Footer'
import Footers from './Footer/Footers'
import Search from './Header/Search'

export default function Body() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Container/>
      <Swipers/>
      <Kleidung/>
      <Versand/>
      <Kategorien/>
      <Rabatt/>
      <Neueste/>
      <Footer/>
      <Footers/>
      
    </div>
  )
}
