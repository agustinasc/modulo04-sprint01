import React from 'react'


const Footer = () => {
  return (
    <div>
             {/* Contacto */}
      <section className="bg-[#A45125] text-white py-16 text-center">
        <h2 className="text-4xl font-semibold">Visitanos</h2>
        <p className="mt-4">
            <i className="bi bi-house-fill text-2xl"></i> Mota Botello y Ayacucho, Catamarca
        </p>
        <p className="mt-2">
            <i className="bi bi-house-fill text-2xl"></i>
                Sucursal: Calle Salta, frente al Sanatorio Pasteur
        </p>
        <p className="mt-4 bi bi-telephone-fill">Teléfono: 123-456-789</p>
      </section>
    </div>
  )
}

export default Footer