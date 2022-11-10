import React from 'react'
import { Logo } from '../../../image';
import './style.css'
 function Header() {
  return (
    <div className='header'>
      <div className="nav">
      <div>
        <img src={Logo} alt='logo'/>
      </div>
      <div className='ul'>
      <p>Features</p>
      <p>industries</p>
      <p>Pricing</p>
      <p>Solutions</p>
      <p>Resources</p>
      </div>
      <div>
        <button>Sign In</button>
        <button>Start Free</button>
      </div>
      </div>
    </div>
  )
}
export default Header;