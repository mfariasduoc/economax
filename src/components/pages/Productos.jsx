import { useState, useEffect } from 'react'
import "./Productos.css"
import Cargando from '../Cargando'
import TarjetaProducto from '../TarjetaProducto'
import { useInventario } from '../../context/InventarioContext'

function Productos() {
    const { articulos } = useInventario()

    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
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
                        {articulos.map(producto => (
                            <TarjetaProducto
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </>
            )}
        </main>
    )
}

export default Productos