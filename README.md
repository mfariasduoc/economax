Econo-Max - Sistema de Supermercado y Gestión de Inventario

Sitio web desarrollado en React para el supermercado familiar Econo-Max, ubicado en San Antonio, Región de Valparaíso, Chile.

Este proyecto forma parte de las actividades formativas de la asignatura Frontend 2 y tiene como objetivo aplicar tecnologías modernas de React para desarrollar una aplicación web con navegación dinámica, componentes reutilizables y gestión global de estados.
🚀 Características del Proyecto
Semana 1: Tecnologías avanzadas de React

    Navegación dinámica: Implementación de React Router DOM mediante BrowserRouter, Routes, Route y NavLink.
    Navegación inferior: Menú de navegación ubicado en la parte inferior de la aplicación, con identificación visual de la página activa.
    Catálogo de productos: Visualización de 20 productos cargados desde un archivo JSON local (datos.json).
    Vistas detalladas: Rutas dinámicas mediante identificadores para consultar información específica de cada producto.
    Página de error 404: Vista personalizada para productos inexistentes y direcciones no encontradas.
    Imágenes optimizadas para publicación: Utilización de process.env.PUBLIC_URL para gestionar correctamente los recursos estáticos tanto en desarrollo local como en GitHub Pages.
    Páginas institucionales y de servicio:
        Inicio: catálogo principal del supermercado.
        Productos: listado de productos disponibles.
        Quiénes Somos: historia, misión, visión y valores de Econo-Max.
        Cómo Comprar: métodos de pago, horarios y políticas de despacho.
        Contacto: información de contacto y formulario de consultas.

Semana 2: Gestión de estado en componentes frontend

    Estado global: Implementación de React Context API mediante InventarioContext.jsx.
    Persistencia de información: Utilización de localStorage para conservar los artículos registrados incluso después de actualizar el navegador.
    Registro de artículos: Formulario para incorporar nuevos artículos al inventario.
    Validación de datos: Comprobación de campos obligatorios y validación de precios numéricos positivos.
    Identificadores automáticos: Generación de ID numéricos consecutivos para los nuevos artículos, comenzando desde el número 21.
    Listado de inventario: Tabla dinámica que presenta todos los artículos registrados.
    Información de los artículos: Cada registro contiene identificador, nombre, marca, tipo de producto y precio.
    Resumen del inventario: Visualización de la cantidad total de artículos y categorías disponibles.
    Diseño con Tailwind CSS: Incorporación de clases utilitarias para construir formularios, tablas, tarjetas y diseños responsivos.

🛠️ Tecnologías Utilizadas
    React 19
    JavaScript (ES6+)
    React Router DOM
    React Context API
    React Hooks (useState, useEffect, useContext)
    Tailwind CSS
    Bootstrap 5
    HTML5
    CSS3
    JSON
    LocalStorage
    Git y GitHub

📂 Estructura del Proyecto
econo-max/
├── public/
│   ├── img/
│   │   ├── productos...
│   │   ├── loading.gif
│   │   └── 404.png
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Cargando.jsx
│   │   ├── TarjetaProducto.jsx
│   │   │
│   │   └── pages/
│   │       ├── Productos.jsx
│   │       ├── Productos.css
│   │       ├── Producto.jsx
│   │       ├── QuienesSomos.jsx
│   │       ├── ComoComprar.jsx
│   │       ├── Contacto.jsx
│   │       ├── NuevoArticulo.jsx
│   │       └── Inventario.jsx
│   │
│   ├── context/
│   │   └── InventarioContext.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── datos.json
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md

⚙️ Instalación y Ejecución
Para ejecutar el proyecto en un entorno local, sigue estos pasos:

1. Clonar el repositorio
git clone URL_DEL_REPOSITORIO

2. Ingresar a la carpeta del proyecto
cd econo-max

3. Instalar las dependencias
npm install

4. Iniciar el servidor de desarrollo
npm start

5. Abrir la aplicación
Acceder desde el navegador a: http://localhost:3000

📦 Gestión del Inventario
La aplicación permite registrar artículos mediante un formulario que solicita los siguientes datos:
Campo - Descripción
ID	Identificador automático y consecutivo.
Nombre	Nombre del artículo.
Marca	Marca comercial del producto.
Tipo	Categoría del artículo.
Precio	Precio expresado en pesos chilenos (CLP).

Los artículos se almacenan en un estado global administrado mediante Context API y se conservan utilizando localStorage.
Importante: El catálogo comercial original, compuesto por 20 productos almacenados en datos.json, se mantiene independiente del nuevo inventario administrado mediante Context API.

🧭 Rutas de Navegación
Ruta - Funcionalidad
/	        Página principal.
/productos	Catálogo de productos.
/producto/:id	Detalle de un producto.
/quienes-somos	Información institucional.
/como-comprar	Información sobre compras y despachos.
/contacto	Información y formulario de contacto.
/nuevo-articulo	Registro de nuevos artículos.
/inventario	Listado general del inventario.
*	Página de error 404.

🌐 Publicación
El proyecto está configurado para su publicación mediante GitHub Pages, utilizando gh-pages y la configuración de homepage del archivo package.json.

👤 Autor
Marco Farias
Proyecto desarrollado para la asignatura Frontend 2.