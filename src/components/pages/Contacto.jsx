import React from 'react'

function Contacto() {
    return (
        <main className="contenido p-4">
            <div className="subtitle">Contacto - Econo-Max</div>
            
            <p className="mb-4 text-muted">
                ¿Tienes dudas, sugerencias o necesitas ayuda con tus compras? Ponte en contacto con nosotros a través de nuestros canales oficiales.
            </p>

            <div className="row g-4">
                {/* Información de Contacto */}
                <div className="col-md-6">
                    <div className="card h-100 p-4 shadow-sm border-0 bg-light">
                        <h4 className="card-title mb-3 text-primary">Nuestra Información</h4>
                        
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <span className="me-2 fs-5">📍</span>
                                <div>
                                    <strong>Ubicación:</strong><br />
                                    Comuna de San Antonio, Región de Valparaíso, Chile.
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start">
                                <span className="me-2 fs-5">📞</span>
                                <div>
                                    <strong>Teléfono / WhatsApp:</strong><br />
                                    <a href="tel:+56994987426" className="text-decoration-none text-dark">+56 9 9498 7426</a>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start">
                                <span className="me-2 fs-5">✉️</span>
                                <div>
                                    <strong>Correo Electrónico:</strong><br />
                                    <a href="mailto:contacto@economax.cl" className="text-decoration-none text-dark">contacto@economax.cl</a>
                                </div>
                            </li>
                        </ul>

                        <h5 className="mt-3 mb-2 text-primary">Redes Sociales</h5>
                        <div className="d-flex gap-3 fs-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary" title="Facebook">
                                🌐 Facebook
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary" title="Instagram">
                                📸 Instagram
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary" title="Twitter / X">
                                💬 Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Formulario de Mensaje Rápido */}
                <div className="col-md-6">
                    <div className="card h-100 p-4 shadow-sm border-0">
                        <h4 className="card-title mb-3 text-primary">Envíanos un mensaje</h4>
                        <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado con éxito! (Ficticio)'); }}>
                            <div className="mb-3 text-start">
                                <label htmlFor="nombre" className="form-label">Tu Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ej. Juan Pérez" required />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="correo@ejemplo.com" required />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="mensaje" rows="3" placeholder="¿En qué te podemos ayudar?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacto