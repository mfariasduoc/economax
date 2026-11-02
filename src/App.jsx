
import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Producto from './components/pages/Producto'
import Productos from './components/pages/Productos'
import ComoComprar from './components/pages/ComoComprar'
import QuienesSomos from './components/pages/QuienesSomos'
import Contacto from './components/pages/Contacto'
import NuevoArticulo from './components/pages/NuevoArticulo'
import Inventario from './components/pages/Inventario'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import datosProductos from './datos.json'

function NoEncontrado() {
    return (
        <main className="contenido p-5 text-center">
            <h2>404 - Página no encontrada</h2>
            <p className="text-muted">
                Lo sentimos, la página que buscas no existe.
            </p>
            <img
                src={`${process.env.PUBLIC_URL}/img/error-404.png`}
                alt="404 - Página no encontrada"
                style={{
                    width: "350px",
                    maxWidth: "100%",
                    height: "auto",
                    margin: "20px auto"
                }}
            />
        </main>
    )
}

function App() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(datosProductos)
    }, [])

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app-container">
              <Header />
                <Routes>
                    <Route path="/" element={ <Productos productos={productos} setProductos={setProductos} /> } />
                    <Route path="/productos" element={ <Productos productos={productos} setProductos={setProductos} />} />
                    <Route path="/producto/:id" element={<Producto productos={productos} />} />
                    <Route path="/como-comprar" element={<ComoComprar />} />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nuevo-articulo" element={<NuevoArticulo />} />
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App