
import { useInventario } from '../../context/InventarioContext'

function Inventario() {

    // obtener los articulos desde el estado global
    const { articulos } = useInventario()

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
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-blue-900"> Inventario de artículos </h1>
                    <p className="text-slate-500"> Consulta todos los artículos registrados en Econo-Max. </p>
                </div>

                {/* resumen del inventario */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-slate-500"> Total de artículos registrados </p>
                        <p className="mt-2 text-3xl font-bold text-blue-700"> {articulos.length} </p>
                    </div>
                    <div className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-slate-500"> Categorías disponibles </p>
                        <p className="mt-2 text-3xl font-bold text-green-700"> {new Set(articulos.map(a => a.tipo)).size} </p>
                    </div>
                </div>

                {/* tabla de articulos */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                    <div className="border-b border-slate-200 px-6 py-5">
                        <h2 className="text-xl font-semibold text-slate-800"> Listado de artículos </h2>
                        <p className="mt-1 text-sm text-slate-500"> Información actualizada del inventario. </p>
                    </div>
                    {articulos.length === 0 ? (
                        // mensaje cuando no existen articulos
                        <div className="px-6 py-16 text-center">
                            <div className="mb-4 text-5xl"> 📦 </div>
                            <h3 className="mb-2 text-lg font-semibold text-slate-700"> Inventario vacío </h3>
                            <p className="text-sm text-slate-500">
                                Todavía no hay artículos registrados.
                                Ingresa un nuevo artículo para comenzar.
                            </p>
                        </div>

                    ) : (

                        // tabla con los articulos registrados
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[650px] text-left text-sm">
                                <thead className="bg-blue-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold"> ID </th>
                                        <th className="px-6 py-4 font-semibold"> Nombre </th>
                                        <th className="px-6 py-4 font-semibold"> Marca </th>
                                        <th className="px-6 py-4 font-semibold"> Tipo </th>
                                        <th className="px-6 py-4 text-right font-semibold"> Precio </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {articulos.map((articulo) => (
                                        <tr key={articulo.id}
                                            className="transition hover:bg-blue-50" >
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-500"> {articulo.id} </td>
                                            <td className="px-6 py-4 font-semibold text-slate-800"> {articulo.nombre} </td>
                                            <td className="px-6 py-4 text-slate-600"> {articulo.marca} </td>
                                            <td className="px-6 py-4"> <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800"> {articulo.tipo} </span> </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-right font-semibold text-green-700"> {formatoPrecio(articulo.precio)} </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* pie de tabla */}
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                        <p className="text-sm text-slate-500"> Mostrando {articulos.length} artículo(s) en el inventario. </p>
                    </div>
                </div>
                <p className="mt-5 text-center text-sm text-slate-500"> Econo-Max | Sistema de gestión de inventario </p>
            </div>
        </main>
    )
}
export default Inventario