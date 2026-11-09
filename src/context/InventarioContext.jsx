import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react'

import datosProductos from '../datos.json'

const InventarioContext = createContext()

export function InventarioProvider({ children }) {

   // recupera los articulos guardados en localStorage
    const [articulos, setArticulos] = useState(() => {
        try {
            const guardados = localStorage.getItem('economax-inventario')

            let listaInicial = datosProductos
            if (guardados) {
                const articulosGuardados = JSON.parse(guardados)
                // combina el catalogo inicial con los articulos nuevos
                listaInicial = [
                    ...datosProductos,
                    ...articulosGuardados.filter(
                        articulo => !datosProductos.some(
                            producto => producto.id === articulo.id
                        )
                    )
                ]
            }

            // asegurar que cada producto tenga stock por defecto si no lo tiene
            return listaInicial.map(item => ({
                ...item,
                stock: item.stock !== undefined ? Number(item.stock) : 10,
                categoria: item.categoria || item.tipo || 'General'
            }))

        } catch (error) {
            console.error('Error al recuperar el inventario:', error)
             // carga los 20 productos iniciales
             return datosProductos
        }
    })

    // estado del carrito de compras
    const [carrito, setCarrito] = useState(() => {
        try {
            const guardado = localStorage.getItem('economax-carrito')
            return guardado ? JSON.parse(guardado) : []
        } catch (error) {
            console.error('Error al recuperar el carrito:', error)
            return []
        }
    })

    // guarda los cambios del inventario
    useEffect(() => {
        localStorage.setItem('economax-inventario', JSON.stringify(articulos))
    }, [articulos])

    // guarda los cambios del carrito
    useEffect(() => {
        localStorage.setItem('economax-carrito', JSON.stringify(carrito))
    }, [carrito])

    // agrega un nuevo articulo al inventario
    const agregarArticulo = (nuevoArticulo) => {
        setArticulos(articulosActuales => {
            const nuevoId = articulosActuales.length > 0
                ? Math.max(...articulosActuales.map(a => a.id)) + 1
                : 1

            const articulo = {
                id: nuevoId,
                nombre: nuevoArticulo.nombre,
                marca: nuevoArticulo.marca,
                tipo: nuevoArticulo.tipo,
                categoria: nuevoArticulo.tipo,
                precio: Number(nuevoArticulo.precio),
                stock: Number(nuevoArticulo.stock) || 10,
                img: nuevoArticulo.img || 'img/sin-producto.png'
            }

            return [...articulosActuales, articulo]
        })
    }

    // funciones del carrito
    const agregarAlCarrito = (producto, cantidadSeleccionada = 1) => {
        if (producto.stock < cantidadSeleccionada) {
            return false
        }

        // descontar stock del inventario general
        setArticulos(prevInventario =>
            prevInventario.map(item =>
                item.id === producto.id
                    ? { ...item, stock: item.stock - cantidadSeleccionada }
                    : item
            )
        )

        // agrega o actualiza el carrito
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(item => item.id === producto.id)
            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidadSeleccionada }
                        : item
                )
            } else {
                return [...prevCarrito, { ...producto, cantidad: cantidadSeleccionada }]
            }
        })
        return true
    }

    const actualizarCantidadCarrito = (id, nuevaCantidad) => {
        const itemCarrito = carrito.find(item => item.id === id)
        if (!itemCarrito) return

        const diferencia = nuevaCantidad - itemCarrito.cantidad
        const productoInventario = articulos.find(item => item.id === id)

        if (diferencia > 0 && productoInventario && productoInventario.stock < diferencia) {
            alert("No hay suficiente stock disponible en el inventario.")
            return
        }

        if (nuevaCantidad <= 0) {
            eliminarDelCarrito(id)
            return
        }

        // actualiza stock en el inventario
        setArticulos(prevInventario =>
            prevInventario.map(item =>
                item.id === id ? { ...item, stock: item.stock - diferencia } : item
            )
        )

        // actualiza cantidad en carrito
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === id ? { ...item, cantidad: nuevaCantidad } : item
            )
        )
    }

    const eliminarDelCarrito = (id) => {
        const itemCarrito = carrito.find(item => item.id === id)
        if (!itemCarrito) return

        // devuelve stock al inventario
        setArticulos(prevInventario =>
            prevInventario.map(item =>
                item.id === id ? { ...item, stock: item.stock + itemCarrito.cantidad } : item
            )
        )

        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id))
    }

    const vaciarCarrito = () => {
        // devuelve todo el stock al inventario
        setArticulos(prevInventario =>
            prevInventario.map(item => {
                const enCarrito = carrito.find(c => c.id === item.id)
                return enCarrito ? { ...item, stock: item.stock + enCarrito.cantidad } : item
            })
        )
        setCarrito([])
    }

    return (
        <InventarioContext.Provider value={{
            articulos,
            carrito,
            agregarArticulo,
            agregarAlCarrito,
            actualizarCantidadCarrito,
            eliminarDelCarrito,
            vaciarCarrito
        }}>
            {children}
        </InventarioContext.Provider>
    )
}
// hook personalizado para acceder al inventario global
export function useInventario() {
    const contexto = useContext(InventarioContext)
    if (!contexto) {
        throw new Error('useInventario debe utilizarse dentro de InventarioProvider')
    }
    return contexto
}