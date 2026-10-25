import { useLocation } from 'react-router-dom'

function Producto({ productos }) {
    const { pathname } = useLocation();
    const id = pathname.split("/")[2];
    
    // convertir el id a numero para que coincida con el json
    const producto = productos.find(n => n.id === Number(id));

    if (!producto) {
        return <main className="contenido"><div className="subtitle">Producto no encontrado</div></main>
    }

    return (
        <main className="contenido p-4">
            <div className="card shadow-sm border-0 p-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
                {/* imagen del producto */}
                <img 
                    src={producto.img} 
                    alt={producto.nombre} 
                    className="card-img-top mb-3 rounded" 
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                />
                
                <div className="card-body text-start">
                    <h2 className="subtitle">{producto.nombre}</h2>
                    <p className="fs-4 text-primary fw-bold mb-3">Precio: ${producto.precio}</p>
                    
                    {/* boton para volver atras o comprar */}
                    <button className="btn btn-primary w-100" onClick={() => alert('¡Producto agregado al carrito!')}>
                        Comprar Producto
                    </button>
                </div>
            </div>
        </main>

    ) 
}

export default Producto