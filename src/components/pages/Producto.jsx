import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useInventario } from '../../context/InventarioContext'

function Producto() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { articulos, agregarAlCarrito } = useInventario()
    const [cantidad, setCantidad] = useState(1)
    const [mensaje, setMensaje] = useState('')

    const producto = articulos.find(p => p.id === Number(id))

    if (!producto) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-16 text-center text-slate-800">
                <div className="mx-auto max-w-md bg-white p-8 rounded-2xl shadow border border-slate-200">
                    <h2 className="text-2xl font-bold text-rose-600 mb-2">Producto no encontrado</h2>
                    <p className="text-slate-500 text-sm mb-6">El producto que buscas no existe o ya no está disponible.</p>
                    <Link to="/inventario" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow">
                        Volver al Inventario
                    </Link>
                </div>
            </main>
        )
    }

    const handleAgregar = () => {
        if (cantidad <= 0) return
        const exito = agregarAlCarrito(producto, Number(cantidad))
        if (exito) {
            setMensaje(`¡Se agregaron ${cantidad} unidad(es) al carrito!`)
            setTimeout(() => setMensaje(''), 3000)
        } else {
            alert("No hay suficiente stock disponible en el inventario.")
        }
    }

    const formatoPrecio = (precio) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
        }).format(precio)
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800">
            <div className="mx-auto max-w-3xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                >
                    ← Volver
                </button>

                <div className="bg-white shadow-lg rounded-2xl border border-slate-200 overflow-hidden md:flex">
                    <div className="md:w-1/2 bg-slate-100 flex items-center justify-center p-8">
                        {producto.img ? (
                            <img
                                src={`${import.meta.env.BASE_URL}${producto.img.replace(/^\/+/, '')}`}
                                alt={producto.nombre}
                                className="max-h-72 object-contain rounded"
                            />
                        ) : (
                            <div className="text-slate-400">Sin imagen disponible</div>
                        )}
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 mb-3">
                                {producto.tipo || producto.categoria}
                            </span>
                            <h1 className="text-2xl font-bold text-slate-900">{producto.nombre}</h1>
                            <p className="text-slate-500 text-sm mt-1">Marca: <span className="font-medium text-slate-700">{producto.marca}</span></p>
                            <p className="text-3xl font-bold text-emerald-700 mt-4">{formatoPrecio(producto.precio)}</p>
                            
                            <div className="mt-4">
                                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                    producto.stock > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                }`}>
                                    Stock disponible: {producto.stock}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-slate-200 pt-6">
                            {mensaje && (
                                <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg text-center">
                                    {mensaje}
                                </div>
                            )}

                            {producto.stock > 0 ? (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-600">Cantidad:</span>
                                        <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1.5 text-sm font-semibold text-slate-800">{cantidad}</span>
                                            <button
                                                onClick={() => setCantidad(Math.min(producto.stock, cantidad + 1))}
                                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleAgregar}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition shadow text-sm"
                                    >
                                        Agregar al Carrito
                                    </button>
                                </div>
                            ) : (
                                <p className="text-rose-600 font-semibold text-center py-3 bg-rose-50 rounded-xl text-sm">
                                    Producto agotado
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Producto