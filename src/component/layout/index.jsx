import React from 'react'
import './style.css'
import Header from './header'
import Footer from './footer'
export default function Layout({children}) {
  return (
    <div className='layout'>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}
