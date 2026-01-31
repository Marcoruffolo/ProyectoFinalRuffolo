# blancnoir - E-commerce React

## Descripción
**blancnoir** es una aplicación web de e-commerce desarrollada con React y Firebase, especializada en la venta de productos de tecnología como consolas, celulares, televisores y computadoras. El proyecto implementa un diseño minimalista en blanco y negro que refleja elegancia y modernidad.

## Características Principales

### Funcionalidades Implementadas
- ✅ Navegación SPA (Single Page Application) con React Router
- ✅ Catálogo de productos dinámico
- ✅ Filtrado por categorías (Consolas, Celulares, Televisores, Computadoras)
- ✅ Vista detallada de productos
- ✅ Carrito de compras funcional con Context API
- ✅ Contador de productos con validación de stock
- ✅ Sistema de checkout con formulario de compra
- ✅ Integración con Firebase Firestore para productos y órdenes
- ✅ Diseño responsive y minimalista
- ✅ Renderizado condicional (loaders, mensajes de error, carrito vacío)

## Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca principal para la UI
- **React Router DOM 7.12.0** - Navegación entre páginas
- **Firebase 12.8.0** - Base de datos (Firestore) y backend
- **Vite 7.2.4** - Build tool y servidor de desarrollo
- **Tailwind CSS 4.1.18** - Framework de estilos
- **ESLint** - Linter para calidad de código

## Estructura del Proyecto

```
src/
├── Components/
│   ├── Navbar.jsx              # Barra de navegación principal
│   ├── CartWidget.jsx          # Icono del carrito con contador
│   ├── ItemListContainer.jsx   # Contenedor del listado de productos
│   ├── ItemList.jsx            # Lista de productos
│   ├── Item.jsx                # Tarjeta individual de producto
│   ├── ItemDetailContainer.jsx # Contenedor del detalle del producto
│   ├── ItemDetail.jsx          # Vista detallada del producto
│   ├── ItemCount.jsx           # Contador de cantidad de productos
│   ├── Cart.jsx                # Vista del carrito de compras
│   ├── CartItem.jsx            # Item individual en el carrito
│   └── Checkout.jsx            # Formulario de finalización de compra
├── context/
│   ├── CartContext.js          # Contexto del carrito
│   └── CartProvider.jsx        # Provider del carrito con funciones
├── Firebase/
│   ├── config.js               # Configuración de Firebase
│   └── db.js                   # Funciones para interactuar con Firestore
├── services/
│   └── products.jsx            # Servicios para obtener productos
├── App.jsx                     # Componente principal con rutas
└── main.jsx                    # Punto de entrada de la aplicación
```

## Instalación y Configuración

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd EcommerceReact
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Copia las credenciales de tu proyecto
   - Las credenciales ya están configuradas en `src/Firebase/config.js`

4. **Estructura de Firestore**
   
   Crea dos colecciones en Firestore:

   **Colección: `products`**
   Campos requeridos por documento:
   ```javascript
   {
     name: "Nombre del producto",
     price: 1500,
     description: "Descripción del producto",
     category: "celulares", // consolas, celulares, televisores, computadoras
     stock: 10,
     url: "URL_de_la_imagen"
   }
   ```

   **Colección: `orders`**
   Se crea automáticamente al realizar compras.

5. **Ejecutar el proyecto**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Rutas de la Aplicación

- `/` - Página principal con todos los productos
- `/category/:categoryId` - Productos filtrados por categoría
- `/item/:itemId` - Detalle de un producto específico
- `/cart` - Vista del carrito de compras
- `/checkout` - Formulario de finalización de compra

## Funcionalidades del Carrito

El carrito de compras utiliza Context API y proporciona las siguientes funciones:

- `addItem(item, quantity)` - Agregar producto al carrito
- `removeItem(itemId)` - Eliminar producto del carrito
- `clear()` - Vaciar el carrito completo
- `isInCart(itemId)` - Verificar si un producto está en el carrito
- `getQuantity()` - Obtener cantidad total de items
- `getTotal()` - Obtener el precio total del carrito

## Flujo de Compra

1. El usuario navega por el catálogo de productos
2. Selecciona un producto y ve sus detalles
3. Elige la cantidad y agrega al carrito
4. Puede seguir comprando o ir al carrito
5. En el carrito puede modificar cantidades o eliminar productos
6. Procede al checkout y completa el formulario
7. Al confirmar, se genera una orden en Firestore
8. Recibe un ID de orden para seguimiento

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea el build de producción
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta el linter
```

## Diseño y Estilo

El proyecto implementa un diseño minimalista con las siguientes características:

- **Paleta de colores**: Blanco y negro principalmente
- **Tipografía**: Fuentes sans-serif con espaciado amplio
- **Botones**: Estilo flat con transiciones suaves
- **Layout**: Responsive con grid y flexbox
- **Componentes**: Bordes delgados en lugar de sombras

## Características Técnicas

- **SPA**: Navegación sin recarga de página
- **Lazy Loading**: Carga optimizada de componentes
- **Estado Global**: Manejo con Context API
- **Validaciones**: Stock, campos de formulario
- **Error Handling**: Manejo de errores en peticiones a Firebase
- **Responsive Design**: Adaptable a diferentes dispositivos

## Autor

Marco - Proyecto Final CoderHouse

## Licencia

Este proyecto fue desarrollado como parte del curso de React en CoderHouse.
