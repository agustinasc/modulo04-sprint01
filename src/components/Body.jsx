import React, { useState } from 'react'
import { motion } from "motion/react"
import {slideInFromSide} from '../components/utility/animacion.js'
import logo from '../assets/logo.png';
import Cards from './Cards.jsx';


const Body = () => {

  const [verCards, setVerCards] = useState(false);
  console.log("Boton verCards ->", verCards);
  


/// Manjenado el estado para ver las Card
  const handleVerCards = () => {
    setVerCards(!verCards)
  }

  return (
    <div className='flex flex-col  items-center justify-center mt-36 md:mt-20'>

        <header className="flex flex-col items-center justify-center text-black text-center px-4">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Panificadora Mathiu's
            </h1>
            <p className="text-lg mt-4">
              30 años ofreciendo sabor y tradición en cada pan.
            </p>
            <button 
              onClick={handleVerCards}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg shadow-lg transition"
            >     
                {verCards ? "Ocultar productos" : "Descubre nuestros productos"}               
            </button>
        </header>


         {/* Imagen con animación */}
        <motion.div 
            variants={slideInFromSide("right", 1.5)}
            initial="initial"
            animate={["animate", "animateLogo"]}
            className='relative p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16'>
            <img src={logo} alt="Logo" 
            className='w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 rounded-3xl'
            />
        </motion.div>

        {/* Para ver las Cards, si Cards es "true" */}
        {verCards && (
          <div className="w-full flex justify-center mt-10">
            <Cards/>
          </div>      
        )}
    </div>
  )
}

export default Body