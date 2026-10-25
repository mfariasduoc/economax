import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Contacto from './components/pages/Contacto'
import Producto from './components/pages/Producto'
import Productos from './components/pages/Productos'
import ComoComprar from './components/pages/ComoComprar'
import QuienesSomos from './components/pages/QuienesSomos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// importa productos desde un json
import datosProductos from './datos.json'

function App() {
  const [productos, setProductos] = useState([])

  // cargar los datos al iniciar la aplicacion
  useEffect(() => {
    setProductos(datosProductos)
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Productos productos={productos} setProductos={setProductos}/>}/>
        <Route path="/productos" element={<Productos productos={productos} setProductos={setProductos}/>}/>
        <Route path="/producto/:id" element={<Producto productos={productos} />}/>
        <Route path="/como-comprar" element={<ComoComprar />}/>
        <Route path="/quienes-somos" element={<QuienesSomos />}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </Router>
  )
}

export default App