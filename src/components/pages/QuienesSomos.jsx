import React from 'react'

function QuienesSomos() {
    return (
        <main className="contenido p-4 text-start">
            <div className="subtitle">Quiénes Somos - Econo-Max</div>
            
            <p className="mb-4 text-muted">
                Conoce nuestra historia, nuestros valores y el equipo que día a día trabaja para cuidar el bolsillo de las familias de San Antonio.
            </p>

            <div className="row g-4">
                {/* historia */}
                <div className="col-md-12">
                    <div className="card shadow-sm border-0 p-4 bg-light">
                        <h4 className="text-primary mb-3">Nuestra Historia</h4>
                        <p>
                            Econo-Max se instala en <strong>marzo de 2006</strong> en la hermosa comuna de <strong>San Antonio</strong>, Región de Valparaíso. Nuestros inicios apuntaban a un nicho de abarrotes de bajo costo, beneficiando directamente a la comunidad y convirtiéndonos en un aliado para la economía local.
                        </p>
                        <p>
                            Somos un supermercado de carácter profundamente familiar. Contamos con un equipo cercano y clave de colaboradores que desempeñan sus funciones con dedicación: un reponedor, una cajera y un guardia. Aunque somos un equipo compacto y unido, mantenemos un fuerte espíritu de proyección, apuntando a crecer paso a paso sin perder la calidez que nos caracteriza.
                        </p>
                        <p className="mb-0 text-muted fst-italic">
                            💡 <strong>Origen del nombre Econo-Max:</strong> Econo proviene de <strong>Economía</strong> y Max de <strong>Máxima</strong>, reflejando nuestro compromiso absoluto de entregar el máximo ahorro en cada producto básico para el hogar.
                        </p>
                    </div>
                </div>

                {/* mision y vision */}
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 h-100">
                        <h4 className="text-primary mb-3">Misión</h4>
                        <p>
                            Ser una empresa local reconocida por nuestros clientes como un apoyo real en su economía familiar, ofreciendo precios justos y accesibles.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 h-100">
                        <h4 className="text-primary mb-3">Visión</h4>
                        <p>
                            Ser el supermercado más cercano a nuestros clientes, colaboradores y proveedores en San Antonio, entregando servicios y productos para las necesidades básicas al menor costo posible, comprometidos con el crecimiento de la familia.
                        </p>
                    </div>
                </div>

                {/* cultura organizacional y vlores */}
                <div className="col-md-12">
                    <div className="card shadow-sm border-0 p-4 bg-light">
                        <h4 className="text-primary mb-3">Nuestra Cultura Organizacional y Valores</h4>
                        <p>Nos rigen principios sólidos que aseguran un ambiente de trabajo colaborativo y un servicio cálido:</p>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                            {["Respeto", "Trabajo en equipo", "Compromiso", "Honestidad", "Empatía", "Lealtad", "Compañerismo"].map((valor, index) => (
                                <span key={index} className="badge bg-primary fs-6 p-2">
                                    {valor}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default QuienesSomos