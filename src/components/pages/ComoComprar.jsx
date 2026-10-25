import React from 'react'

function ComoComprar() {
    return (
        <main className="contenido p-4 text-start">
            <div className="subtitle">Cómo Comprar en Econo-Max</div>
            
            <p className="mb-4 text-muted">
                Comprar en nuestro supermercado familiar es muy fácil, rápido y seguro. Sigue los pasos de nuestra plataforma y recibe tus productos directo en la puerta de tu hogar en San Antonio.
            </p>

            <div className="row g-4">
                {/* Métodos de Pago */}
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 h-100 bg-light">
                        <h4 className="text-primary mb-3">💳 Métodos de Pago</h4>
                        <p>Contamos con diversas alternativas para que pagues de la forma más cómoda posible:</p>
                        <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item bg-transparent">
                                <strong>Tarjetas de Débito y Crédito:</strong> A través de nuestra plataforma segura en línea al momento de hacer el pedido.
                            </li>
                            <li className="list-group-item bg-transparent">
                                <strong>Efectivo o Transferencia:</strong> Opciones disponibles para pagos contra entrega coordinados directamente con nuestro equipo.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* horarios y tiempos de entrega */}
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 h-100">
                        <h4 className="text-primary mb-3">🚚 Tiempos y Horarios de Despacho</h4>
                        <p>Realizamos entregas de <strong>lunes a sábado</strong> (los días domingos no hay repartos):</p>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                ⏰ <strong>Compras antes del mediodía (12:00 PM):</strong> Serán repartidas a partir de las <strong>15:00 horas</strong> del mismo día.
                            </li>
                            <li className="mb-2">
                                🌙 <strong>Compras después del mediodía:</strong> Serán repartidas el <strong>día siguiente</strong> en horario matutino, desde las <strong>09:00 AM hasta las 13:00 horas</strong>.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* consejos y recomendaciones */}
                <div className="col-md-12">
                    <div className="card shadow-sm border-0 p-4 bg-light">
                        <h4 className="text-primary mb-3">📦 Recomendaciones al Recibir</h4>
                        <p className="mb-2">
                            🔍 <strong>Revisa tus productos:</strong> Te recordamos revisar detalladamente tus productos al momento de recibirlos para asegurar que todo esté en perfecto estado.
                        </p>
                        <p className="mb-0">
                            ⭐ <strong>Califica nuestra atención:</strong> No olvides calificar la atención y el servicio de nuestro repartidor para ayudarnos a mejorar cada día.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ComoComprar