
import { useState } from "react"
import { Link } from 'react-router-dom'

function TarjetaProducto({ producto }) {
    const [enCarrito, setEnCarrito] = useState(false)

    return (
        <div className="card m-3">
            <img
                src={`${process.env.PUBLIC_URL}${producto.img}`}
                alt={producto.nombre}
                className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/producto/${producto.id}`} className="nav-link" > {producto.nombre} </Link>
                </h5>
                <p className="card-text"> $ {producto.precio.toLocaleString('es-CL')} </p>
                {!enCarrito ? (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setEnCarrito(true)}
                    >   Comprar
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setEnCarrito(false)}
                    >   En Carrito
                    </button>
                )}
            </div>
        </div>
    )
}

export default TarjetaProducto