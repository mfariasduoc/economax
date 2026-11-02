import { useState, useEffect } from 'react'
import "./Productos.css"
import Cargando from '../Cargando'
import TarjetaProducto from '../TarjetaProducto'
import datosProductos from '../../datos.json'

function Productos({ productos, setProductos }) {
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))

                if (productos.length === 0) {
                    setProductos(datosProductos)
                }
            } catch (error) {
                setError(true)
            } finally {
                setCargando(false)
            }
        }

        obtenerProductos()
    }, [])

    return (
        <main className="contenido">
            <div className="subtitle"> Listado de productos </div>
            {error ? (
                <div className="alert alert-danger">
                    <span role="img" aria-label="Advertencia"> ⚠️ </span>
                    {' '}No se pudieron cargar los datos de los productos.
                </div>
            ) : cargando ? (
                <Cargando />
            ) : (
                <>
                    <div className="productos-cont" style={{ flexWrap: 'wrap' }} >
                        {productos.map(producto => (
                            <TarjetaProducto
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>

                    <div style={{ textAlign: "left", marginTop: "20px" }}>
                        <button className="btn btn-primary"> Mostrar carrito </button>
                    </div>
                </>
            )}
        </main>
    )
}

export default Productos