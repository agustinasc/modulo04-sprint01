import React from "react";
import { motion } from "motion/react";
import foto from "../assets/fotoPan.webp"
import focaccia from "../assets/Focaccia.jpeg"
import panDulce from "../assets/PanDulce.jpeg"
import budin from "../assets/budin.jpeg"

const Card = ({ image, title }) => {
    return(
        <motion.div 
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
        >
            <img src={image} alt="Foto de Pan" className="w-40 h-40 object-cover rounded-lg"/>
            <h3 className="text-xl font-bold text-center mt-2">{title}</h3>
            
        </motion.div>
    )
}


const Cards = () => {
  return (
    
    <motion.div 
        className="flex flex-wrap justify-center gap-6 m-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Card image={foto} title="Pan artesanal"/>
        <Card image={panDulce} title="Pan dulce"/>
        <Card image={focaccia} title="Focaccia"/>
        <Card image={budin} title="Budin"/>
        <Card image={foto} title="Pan artesanal"/>
        <Card image={panDulce} title="Pan dulce"/>
        <Card image={focaccia} title="Focaccia"/>
        <Card image={budin} title="Budin"/>
        <Card image={foto} title="Pan artesanal"/>
        <Card image={panDulce} title="Pan dulce"/>
        <Card image={focaccia} title="Focaccia"/>
        <Card image={budin} title="Budin"/>
        <Card image={foto} title="Pan artesanal"/>
        <Card image={panDulce} title="Pan dulce"/>
        <Card image={focaccia} title="Focaccia"/>
        <Card image={budin} title="Budin"/>
        <Card image={foto} title="Pan artesanal"/>
    </motion.div>
  )
}

export default Cards