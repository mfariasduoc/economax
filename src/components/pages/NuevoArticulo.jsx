
import { useState } from 'react'
import { useInventario } from '../../context/InventarioContext'

function NuevoArticulo() {

    const { agregarArticulo } = useInventario()

    // estado local del formulario
    const [formulario, setFormulario] = useState({
        nombre: '',
        marca: '',
        tipo: '',
        precio: ''
    })

    const [mensaje, setMensaje] = useState('')

    // actualiza los campos del formulario
    const manejarCambio = (e) => {
        const { name, value } = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })

        setMensaje('')
    }

    // registra el articulo
    const manejarEnvio = (e) => {
        e.preventDefault()

        // valida los datos ingresados
        if (
            !formulario.nombre.trim() ||
            !formulario.marca.trim() ||
            !formulario.tipo ||
            formulario.precio === '' ||
            Number(formulario.precio) <= 0 ||
            !Number.isFinite(Number(formulario.precio))
        ) {
            setMensaje('Por favor, completa todos los campos correctamente.')
            return
        }

        // envia el articulo al estado global
        agregarArticulo({
            nombre: formulario.nombre.trim(),
            marca: formulario.marca.trim(),
            tipo: formulario.tipo,
            precio: Number(formulario.precio)
        })

        // limpia el formulario
        setFormulario({
            nombre: '',
            marca: '',
            tipo: '',
            precio: ''
        })

        setMensaje('Artículo registrado exitosamente!')
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800">

            <div className="mx-auto max-w-3xl">

                {/* encabezado */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-blue-900">
                        Registrar nuevo artículo
                    </h1>

                    <p className="text-slate-500">
                        Incorpora nuevos productos al inventario de Econo-Max.
                    </p>
                </div>

                {/* formulario */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">

                    <div className="mb-6 border-b border-slate-200 pb-4">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Información del artículo
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Completa todos los campos para registrar el artículo.
                        </p>
                    </div>

                    <form onSubmit={manejarEnvio}>

                        {/* nombre */}
                        <div className="mb-5">
                            <label htmlFor="nombre"
                                   className="mb-2 block text-sm font-semibold text-slate-700" >
                                   Nombre del artículo
                            </label>

                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={manejarCambio}
                                placeholder="Ej. Leche Entera 1 Litro"
                                maxLength="80"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                        </div>

                        {/* marca */}
                        <div className="mb-5">
                            <label htmlFor="marca"
                                   className="mb-2 block text-sm font-semibold text-slate-700" >
                                Marca
                            </label>

                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                value={formulario.marca}
                                onChange={manejarCambio}
                                placeholder="Ej. Colun"
                                maxLength="50"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                        </div>

                        {/* tipo */}
                        <div className="mb-5">
                            <label htmlFor="tipo"
                                   className="mb-2 block text-sm font-semibold text-slate-700" >
                                   Tipo de producto
                            </label>

                            <select
                                id="tipo"
                                name="tipo"
                                value={formulario.tipo}
                                onChange={manejarCambio}
                                required
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" >
                                <option value="">Selecciona una categoría</option>
                                <option value="Abarrotes">Abarrotes</option>
                                <option value="Lácteos">Lácteos</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Carnes">Carnes</option>
                                <option value="Frutas y verduras">Frutas y verduras</option>
                                <option value="Limpieza">Limpieza</option>
                                <option value="Higiene personal">Higiene personal</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>

                        {/* precio */}
                        <div className="mb-6">
                            <label htmlFor="precio"
                                   className="mb-2 block text-sm font-semibold text-slate-700" >
                                   Precio (CLP)
                            </label>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-500"> $ </span>

                                <input
                                    type="number"
                                    id="precio"
                                    name="precio"
                                    value={formulario.precio}
                                    onChange={manejarCambio}
                                    placeholder="Ej. 1190"
                                    min="1"
                                    step="1"
                                    required
                                    className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                            </div>
                        </div>

                        {/* mensaje de resultado */}
                        {mensaje && (
                            <div
                                role="status"
                                className={`mb-5 rounded-lg p-3 text-center text-sm font-medium ${
                                    mensaje.includes('exitosamente')
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                }`} > {mensaje}
                            </div>
                        )}

                        {/* boton */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300" >
                            + Registrar artículo
                        </button>
                    </form>
                </div>

                {/* informacion adicional */}
                <p className="mt-5 text-center text-sm text-slate-500">
                    Econo-Max | Sistema de gestión de inventario
                </p>

            </div>
        </main>
    )
}

export default NuevoArticulo