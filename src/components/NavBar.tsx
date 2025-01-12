import { useState } from 'react';
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar' >
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/' ><img src={logo} alt="" /></Link>
          <button type='button'  className='nav-btn' onClick={() => setOpen(!isOpen)} >
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'} >
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/rooms' >Rooms</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar