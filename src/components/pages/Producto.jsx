
import { useParams, Link } from 'react-router-dom'

function Producto({ productos }) {
    const { id } = useParams()
    const producto = productos.find( p => p.id === Number(id) )
    if (!producto) {
        return (
            <main className="contenido p-4 text-center">
                <h2>Producto no encontrado</h2>
                <p className="text-muted">  El producto que buscas no existe o ya no está disponible. </p>
                <img
                src={`${process.env.PUBLIC_URL}/img/sin-producto.png`}
                alt="Carrito de compras triste"
                style={{
                    width: "350px",
                    maxWidth: "100%",
                    height: "auto",
                    margin: "20px auto"
                }}
            />
                <Link to="/productos" className="btn btn-primary mt-3"> Volver a productos </Link>
            </main>
        )
    }

    return (
        <main className="contenido p-4">
            <div
                className="card shadow-sm border-0 p-4"
                style={{ maxWidth: "500px", margin: "0 auto" }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}${producto.img}`}
                    alt={producto.nombre}
                    className="card-img-top mb-3 rounded"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                />
                <div className="card-body text-start">
                    <h2 className="subtitle"> {producto.nombre} </h2>
                    <p className="fs-4 text-primary fw-bold mb-3">
                        Precio: ${producto.precio.toLocaleString('es-CL')}
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={() => alert('¡Producto agregado al carrito!')}
                    >   Comprar Producto
                    </button>
                    <Link to="/productos" className="btn btn-outline-secondary w-100 mt-2" > Volver al catálogo </Link>
                </div>
            </div>
        </main>
    )
}

export default Producto