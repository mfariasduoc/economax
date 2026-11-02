
import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react'

const InventarioContext = createContext()

export function InventarioProvider({ children }) {

    // recupera los articulos guardados en localStorage
    const [articulos, setArticulos] = useState(() => {
        try {
            const guardados = localStorage.getItem('economax-inventario')
            return guardados ? JSON.parse(guardados) : []
        } catch (error) {
            console.error('Error al recuperar el inventario:', error)
            return []
        }
    })

    // guarda automaticamente los cambios del inventario
    useEffect(() => {
        localStorage.setItem(
            'economax-inventario',
            JSON.stringify(articulos)
        )
    }, [articulos])

    // agrega un nuevo articulo al inventario
    const agregarArticulo = (nuevoArticulo) => {

        // genera un id desde el 21
        const nuevoId = articulos.length > 0
            ? Math.max(...articulos.map(a => a.id)) + 1
            : 21

        const articulo = {
            id: nuevoId,
            nombre: nuevoArticulo.nombre,
            marca: nuevoArticulo.marca,
            tipo: nuevoArticulo.tipo,
            precio: Number(nuevoArticulo.precio)
        }

        // actualiza el estado global
        setArticulos(articulosActuales => [
            ...articulosActuales,
            articulo
        ])
    }

    return (
        <InventarioContext.Provider value={{articulos, agregarArticulo }} >
            {children}
        </InventarioContext.Provider>
    )
}

// hook personalizado para acceder al inventario global
export function useInventario() {
    const contexto = useContext(InventarioContext)
    if (!contexto) {
        throw new Error(
            'useInventario debe utilizarse dentro de InventarioProvider'
        )
    }
    return contexto
}