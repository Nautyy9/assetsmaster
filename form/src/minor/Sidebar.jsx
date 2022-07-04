import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Logout from '../components/Logout'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className=' justify-content-start align-items-center d-none d-lg-flex bg-danger' style={{background: 'gray', height: '60px',overflow: 'hidden' }} >
          <Link to='#' className='menu-bars m-5 ' style={{overflow: 'hidden'}} >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Logout/>
        </div>
        <nav className={sidebar ? 'nav-menu active bg-danger d-none d-lg-block' : 'nav-menu bg-danger d-block'}>
          <ul className='nav-menu-items bg-danger'  onClick={showSidebar}>
            <li className='navbar-toggle bg-danger '>
              <Link to='#' className='menu-bars '>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </ul>
        </nav>
         <div className={sidebar ? 'd-flex bg-danger d-lg-none' : 'd-flex bg-danger d-block d-lg-none'} style={{textDecoration: ' none '}}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="cName">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <Logout/>
        </div>
      </IconContext.Provider>
      
    </>
  );
}

export default Navbar;