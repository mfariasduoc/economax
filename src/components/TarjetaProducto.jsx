import { Link } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext'

function TarjetaProducto({ producto }) {
    const { agregarAlCarrito, carrito } = useInventario()

    // verifica si el producto ya esta en el carrito global
    const enElCarrito = carrito.some(item => item.id === producto.id)

    const manejarCompra = () => {
        const exito = agregarAlCarrito(producto, 1)
        if (!exito) {
            alert('no hay suficiente stock disponible.')
        }
    }

    return (
        <div className="card m-3">
            <img
                src={ producto.img
                    ? `${import.meta.env.BASE_URL}${producto.img.replace(/^\/+/, '')}`
                    : `${import.meta.env.BASE_URL}img/sin-producto.png`
                }
                alt={producto.nombre}
                className="card-img-top" 
            />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/producto/${producto.id}`} className="nav-link"> {producto.nombre} </Link>
                </h5>
                <p className="card-text"> $ {producto.precio.toLocaleString('es-CL')} </p>
                <p className="card-text text-muted small"> stock: {producto.stock} </p>
                
                {!enElCarrito ? (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={manejarCompra}
                        disabled={producto.stock <= 0}
                    > 
                        {producto.stock > 0 ? 'Comprar' : 'Agotado'} 
                    </button>
                ) : (
                    <Link
                        to="/carrito"
                        className="btn btn-secondary"
                    > 
                        En Carrito 
                    </Link>
                )}
            </div>
        </div>
    )
}

export default TarjetaProducto