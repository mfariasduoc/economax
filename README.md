# Econo-Max - Sistema de Supermercado

Sitio web desarrollado en React para el supermercado familiar "Econo-Max", ubicado en San Antonio, Chile. 
Este proyecto forma parte de la Actividad Formativa en React.

## 🚀 Características del Proyecto

Navegación Dinámica: Implementación de React Router (`react-router-dom`) para una experiencia de una sola página (SPA) fluida y sin recargas.
Diseño Responsivo: Diseñado utilizando Bootstrap 5 y estilos CSS personalizados, incluyendo barra de navegación adaptable con menú hamburguesa para dispositivos móviles.
Catálogo de Inventario: Visualización dinámica de 20 productos de bajo costo cargados desde una fuente de datos local (`datos.json`).
Vistas Detalladas: Sistema de rutas dinámicas por ID para consultar información específica de cada producto.
 Páginas Institucionales y de Servicio:
  Inicio (Home): Presentación principal del supermercado.
  Productos: Listado y detalles del inventario.
  Quiénes Somos: Historia, valores, misión, visión y estructura del equipo familiar de Econo-Max.
  Cómo Comprar: Guía detallada de métodos de pago, horarios y políticas de despacho.
  Contáctanos: Canales de comunicación con el local.

## 🛠️ Tecnologías Utilizadas

 React (Create React App)
 React Router DOM
 Bootstrap 5 & Bootstrap JS Bundle
 HTML5 / CSS3
 JavaScript (ES6+)

## ⚙️ Instrucciones de Instalación y Ejecución

Si deseas clonar o correr este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clonar o descomprimir el proyecto en tu computador.
2. Abre tu terminal y navega hasta la carpeta raíz del proyecto:
   cd ruta/a/la/carpeta/econo-max
Instala las dependencias necesarias (React Router y Bootstrap):
    npm install
    Inicia el servidor de desarrollo:
    npm start
    Abre tu navegador y accede a: http://localhost:3000

## 📁 Estructura del Proyecto

econo-max/
├── public/
│   ├── img/              # Imágenes de los productos (ej. leche-entera.jpg)
│   └── index.html        # HTML principal con viewport responsivo
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Barra de navegación principal y responsiva
│   │   ├── Header.css    # Estilos del encabezado
│   │   └── pages/        # Vistas de la aplicación
│   │       ├── Home.jsx
│   │       ├── Productos.jsx
│   │       ├── Producto.jsx
│   │       ├── QuienesSomos.jsx
│   │       ├── ComoComprar.jsx
│   │       └── Contacto.jsx
│   ├── App.js            # Configuración de Rutas (React Router)
│   ├── datos.json        # Base de datos local de inventario (20 productos)
│   ├── index.js          # Punto de entrada e importación de Bootstrap
│   └── index.css         # Estilos globales
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto

## 👤 Autor

Proyecto desarrollado por Marco Farias para la asignatura de Frontend 2.

