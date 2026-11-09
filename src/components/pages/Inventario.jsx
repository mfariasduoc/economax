import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInventario } from '../../context/InventarioContext'

function Inventario() {
     // obtener los articulos desde el estado global
    const { articulos } = useInventario()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
    const [busqueda, setBusqueda] = useState('')

    // obtiene categorias unicas dinamicamente
    const categorias = ['Todas', ...new Set(articulos.map(a => a.tipo || a.categoria || 'General'))]

    // filtra sin alterar los datos originales
    const articulosFiltrados = articulos.filter(articulo => {
        const tipoArticulo = articulo.tipo || articulo.categoria || 'General'
        const cumpleCategoria = categoriaSeleccionada === 'Todas' || tipoArticulo === categoriaSeleccionada
        const cumpleBusqueda = articulo.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                               articulo.marca.toLowerCase().includes(busqueda.toLowerCase())
        return cumpleCategoria && cumpleBusqueda
    })
    // formatea los precios en clp
    const formatoPrecio = (precio) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
        }).format(precio)
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800">
            <div className="mx-auto max-w-6xl">

                {/* encabezado */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="mb-2 text-3xl font-bold text-blue-950">Inventario de Artículos</h1>
                        <p className="text-slate-500">Consulta y filtra todos los artículos registrados en Econo-Max.</p>
                    </div>
                    <Link
                        to="/carrito"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow transition flex items-center gap-2"
                    >
                        🛒 Ver Carrito
                    </Link>
                </div>

                {/* resumen del inventario */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">Total de artículos</p>
                        <p className="mt-2 text-3xl font-bold text-blue-700">{articulos.length}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">Categorías disponibles</p>
                        <p className="mt-2 text-3xl font-bold text-emerald-700">{categorias.length - 1}</p>
                    </div>
                    <div className="rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">Mostrados en filtro</p>
                        <p className="mt-2 text-3xl font-bold text-indigo-700">{articulosFiltrados.length}</p>
                    </div>
                </div>

                {/* filtros y busqueda */}
                <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
                    <input
                        type="text"
                        placeholder="Buscar por nombre o marca..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />

                    <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
                        <span className="text-sm font-medium text-slate-600">Categoría:</span>
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoriaSeleccionada(cat)}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                                    categoriaSeleccionada === cat
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* tabla de articulos */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                    {articulosFiltrados.length === 0 ? (
                        <div className="px-6 py-16 text-center">
                            <div className="mb-4 text-5xl">📦</div>
                            <h3 className="mb-2 text-lg font-semibold text-slate-700">No se encontraron artículos</h3>
                            <p className="text-sm text-slate-500">Prueba con otra búsqueda o categoría.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px] text-left text-sm">
                                <thead className="bg-blue-950 text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">ID</th>
                                        <th className="px-6 py-4 font-semibold">Nombre</th>
                                        <th className="px-6 py-4 font-semibold">Marca</th>
                                        <th className="px-6 py-4 font-semibold">Tipo</th>
                                        <th className="px-6 py-4 text-center font-semibold">Stock</th>
                                        <th className="px-6 py-4 text-right font-semibold">Precio</th>
                                        <th className="px-6 py-4 text-center font-semibold">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {articulosFiltrados.map((articulo) => (
                                        <tr key={articulo.id} className="transition hover:bg-blue-50/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-500">{articulo.id}</td>
                                            <td className="px-6 py-4 font-semibold text-slate-800 flex items-center gap-3">
                                                {articulo.img && (
                                                    <img 
                                                        src={`${import.meta.env.BASE_URL}${articulo.img.replace(/^\/+/, '')}`} 
                                                        alt={articulo.nombre} 
                                                        className="w-10 h-10 object-contain rounded bg-slate-100 p-1"
                                                    />
                                                )}
                                                {articulo.nombre}
                                            </td>
                                            <td className="px-6 py-4 text-slate-600">{articulo.marca}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                                                    {articulo.tipo || articulo.categoria}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                                                    articulo.stock > 5 ? 'bg-emerald-100 text-emerald-800' : articulo.stock > 0 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                                                }`}>
                                                    {articulo.stock} disp.
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-right font-semibold text-emerald-700">
                                                {formatoPrecio(articulo.precio)}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <Link
                                                    to={`/producto/${articulo.id}`}
                                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition"
                                                >
                                                    Ver Detalle
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                        <p className="text-sm text-slate-500">Mostrando {articulosFiltrados.length} de {articulos.length} artículo(s).</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Inventario