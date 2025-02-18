import React, { useState } from 'react';
import logo from '../assets/logo2.png';

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false)
  console.log('isOpen ->', isOpen);
  

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }

  const navbarLinks = [
    {
      id: 1,
      title: "Inicio",
      link: "#"
    },
    {
      id: 2,
      title: "Contacto",
      link: "#"
    },
    {
      id: 3,
      title: "Nosotros",
      link: "#"
    },
    {
      id: 4,
      title: "Fotos",
      link: "#"
    },
  ]

  const navbarRedes = [
    {
      id: 1,
      title: "Facebook",
      link: "https://www.facebook.com/panificadoramathius",
      icon: "bi bi-facebook",
    },
    {
      id: 2,
      title: "Instagram",
      link: "https://www.instagram.com/panificadora.mathius/",
      icon: "bi bi-instagram",
    }
  ]

  return (
    <nav className='w-full bg-[#5B0601] bg-opacity-30'>
        {/* VIEW DESKTOP */}
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-6 py-3'>
          {/* LOGO */}
          <div className='flex items-center gap-2'>
              <img src={logo} 
              alt="Logo panaderia" 
              className='w-[200px] rounded-full'
              />
              <p className='text-white font-bold text-3xl'>PANIFICADORA</p>
          </div>

          {/* MENU HAMBURGUESA */}
          <button 
          className='md:hidden text-white p-2 cursor-pointer text-2xl'
          onClick={toggleMenu}
          >
            {isOpen ? <i className="bi bi-x-circle-fill"></i> : <i className="bi bi-list"></i>}
          </button>

          {/* NAVIGATION LINKS */}
          <div className='hidden md:block'>
            <ul className='flex space-x-4 px-4'>
              {navbarLinks.map((link)=> (
                <li key={link.id}>
                  <a 
                  href="/" 
                  className='text-lg text-white hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110 inline-block'
                  >{link.title}</a>
              </li>
              )
              )}          
            </ul>
          </div>

          {/* NAVIGATION REDES */}
          <div className='hidden md:block'>
            <ul className='flex space-x-4 px-4'>
              {navbarRedes.map((link)=> (
                <li key={link.id}>
                  <a 
                  href={link.link}
                  target="_blank"
                  className='text-lg text-white hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110 inline-block'
                  >
                    <i className={`${link.icon} sm:text-2xl text-lg text-white transition-all duration-300 hover:text-yellow-500`}>
                    </i>                   
                  </a>
              </li>
              )
              )}          
            </ul>
          </div>

        </div>

        {/* VIEW MOBILE */}
        <div className={`md:hidden absolute w-full bg-gray-800 bg-opacity-30 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              
              {/* NAVIGATION LINKS MOBILE*/}
          
            <ul className='flex flex-col px-4 py-2'>
              {navbarLinks.map((link)=> (
                <li key={link.id} className='py-2 text-center'>
                  <a 
                  href={"/"} 
                  className='text-white hover:text-yellow-500 block'
                  onClick={() => setisOpen(false)}
                  >{link.title}</a>
              </li>
              ))}          
            </ul>
              {/* NAVIGATION REDES MOBILE*/}
          
            <ul className='flex space-x-4 px-4 py-2 border-t border-yellow-700 justify-center'>
              {navbarRedes.map((link)=> (
                <li key={link.id}>
                  <a 
                  href={link.link} 
                  target="_blank"
                  className='text-white px-2 inline-block'
                  onClick={() => setisOpen(false)}
                  >
                    <i className={`${link.icon} text-lg text-white px-2 hover:text-yellow-500`}
                    ></i>
                    {link.title}
                  </a>
              </li>
              ))}          
            </ul>
        </div>
    </nav>
  )
}

export default Navbar