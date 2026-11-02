
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    const enlaces = [
        { ruta: '/', texto: 'Inicio', icono: '🏠', exacto: true },
        { ruta: '/productos', texto: 'Productos', icono: '🛒' },
        { ruta: '/como-comprar', texto: 'Cómo comprar', icono: '📦' },
        { ruta: '/quienes-somos', texto: 'Quiénes somos', icono: '🏪' },
        { ruta: '/contacto', texto: 'Contacto', icono: '📞' },
        { ruta: '/nuevo-articulo', texto: 'Nuevo artículo', icono: '➕' },
        { ruta: '/inventario', texto: 'Inventario', icono: '📋' }

    ]

    return (
        <nav className="menu-inferior">
            {enlaces.map((enlace) => (
                <NavLink
                    key={enlace.ruta}
                    to={enlace.ruta}
                    end={enlace.exacto}
                    className={({ isActive }) =>
                        `menu-enlace ${isActive ? 'activo' : ''}`
                    }
                >
                    <span className="menu-icono">{enlace.icono}</span>
                    <span className="menu-texto">{enlace.texto}</span>
                </NavLink>
            ))}
        </nav>
    )
}

export default Header