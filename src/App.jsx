import './App.css'
import Header from './components/Header'
import Producto from './components/pages/Producto'
import Productos from './components/pages/Productos'
import ComoComprar from './components/pages/ComoComprar'
import QuienesSomos from './components/pages/QuienesSomos'
import Contacto from './components/pages/Contacto'
import NuevoArticulo from './components/pages/NuevoArticulo'
import Inventario from './components/pages/Inventario'
import Carrito from './components/pages/Carrito';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function NoEncontrado() {
    return (
        <main className="contenido p-5 text-center">
            <h2>404 - Página no encontrada</h2>
            <p className="text-muted">
                Lo sentimos, la página que buscas no existe.
            </p>
            <img
                src={`${import.meta.env.BASE_URL}img/error-404.png`}
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

    return (
        <Router basename={import.meta.env.BASE_URL}>
            <div className="app-container">
              <Header />
                <Routes>
                    <Route path="/" element={<Productos />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/producto/:id" element={<Producto />} />
                    <Route path="/como-comprar" element={<ComoComprar />} />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nuevo-articulo" element={<NuevoArticulo />} />
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App