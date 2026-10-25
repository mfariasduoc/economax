import { useState } from "react"
import { Link } from 'react-router-dom'

function TarjetaProducto({producto}) {
    const [enCarrito, setEnCarrito] = useState(false)

    return <div className="card m-3">
        <img src={`${process.env.PUBLIC_URL}${producto.imagen}`} 
  alt={producto.nombre} className="card-img-top"/>
        
        <div className="card-body">            
            <h5 className="card-title">
                <Link to={"/producto/" + producto.id} className="nav-link active" aria-current="page">{producto.nombre}</Link>
            </h5>
            <p className="card-text">$ {producto.precio}</p>

            {!enCarrito ?
                (<a href="#" className="btn btn-primary" onClick={() => setEnCarrito(true)}>Comprar</a>)
                :
                (<a href="#" className="btn btn-secondary" onClick={() => setEnCarrito(false)}>En Carrito</a>)
            }
            
        </div>
    </div>
}

export default TarjetaProducto