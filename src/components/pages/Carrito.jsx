import { Link } from 'react-router-dom'
import { useInventario } from '../../context/InventarioContext'

function Carrito() {
    const { carrito, actualizarCantidadCarrito, eliminarDelCarrito, vaciarCarrito } = useInventario()

    const totalCompra = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    const formatoPrecio = (precio) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
        }).format(precio)
    }

    if (carrito.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-16 text-center text-slate-800">
                <div className="mx-auto max-w-md bg-white p-8 rounded-2xl shadow border border-slate-200">
                    <div className="text-5xl mb-4">🛒</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Tu carrito está vacío</h2>
                    <p className="text-slate-500 text-sm mb-6">Explora el inventario y agrega productos para comenzar.</p>
                    <Link
                        to="/inventario"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow"
                    >
                        Ir al Inventario
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-blue-950">Carrito de Compras</h1>
                        <p className="text-slate-500 text-sm">Gestiona los artículos seleccionados y ajusta sus cantidades.</p>
                    </div>
                    <Link
                        to="/inventario"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                        ← Volver al Inventario
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-6">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Producto</th>
                                <th className="px-6 py-4 font-semibold">Precio</th>
                                <th className="px-6 py-4 text-center font-semibold">Cantidad</th>
                                <th className="px-6 py-4 text-right font-semibold">Subtotal</th>
                                <th className="px-6 py-4 text-center font-semibold">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {carrito.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {item.img && (
                                                <img 
                                                    src={`${import.meta.env.BASE_URL}${item.img.replace(/^\/+/, '')}`} 
                                                    alt={item.nombre} 
                                                    className="w-12 h-12 object-contain rounded bg-slate-100 p-1"
                                                />
                                            )}
                                            <div>
                                                <div className="font-semibold text-slate-800">{item.nombre}</div>
                                                <div className="text-xs text-slate-500">{item.marca}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        {formatoPrecio(item.precio)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="inline-flex items-center border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => actualizarCantidadCarrito(item.id, item.cantidad - 1)}
                                                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1 text-sm font-semibold text-slate-800">{item.cantidad}</span>
                                            <button
                                                onClick={() => actualizarCantidadCarrito(item.id, item.cantidad + 1)}
                                                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-semibold text-emerald-700">
                                        {formatoPrecio(item.precio * item.cantidad)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => eliminarDelCarrito(item.id)}
                                            className="text-rose-600 hover:text-rose-800 text-xs font-semibold px-2.5 py-1 rounded bg-rose-50 hover:bg-rose-100 transition"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                        onClick={vaciarCarrito}
                        className="w-full sm:w-auto px-5 py-2.5 bg-rose-100 text-rose-700 font-semibold text-sm rounded-xl hover:bg-rose-200 transition"
                    >
                        Vaciar Carrito
                    </button>
                    <div className="w-full sm:w-auto text-right flex flex-col sm:items-end gap-2">
                        <div className="flex justify-between sm:justify-end gap-8 text-lg font-bold">
                            <span className="text-slate-600">Total General:</span>
                            <span className="text-emerald-700">{formatoPrecio(totalCompra)}</span>
                        </div>
                        <button
                            onClick={() => {
                                alert("¡Compra realizada con éxito! El inventario ha sido actualizado.")
                                vaciarCarrito()
                            }}
                            className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow transition"
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Carrito