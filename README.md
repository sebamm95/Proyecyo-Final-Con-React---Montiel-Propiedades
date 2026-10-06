# Montiel Propiedades

Sitio web de una inmobiliaria hecho con **React + Vite** y **React Router v6**.
Trabajo práctico integrador — UTN Desarrollo Web Full Stack.

## Requisitos
- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Cómo ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/sebamm95/montiel-propiedades.git
cd montiel-propiedades

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrí la URL que muestra la terminal (normalmente http://localhost:5173).

Otros comandos:
- `npm run build`: genera la versión de producción en `dist/`
- `npm run preview`: previsualiza el build

## Estructura

```
src/
├── components/   Navbar, Layout, Home, Card, Cards, Gallery, Contact, Footer
├── pages/        HomePage, ServiciosPage, PropiedadesPage, ContactoPage
├── styles/       un CSS por componente
├── assets/       imágenes
├── hooks/        useForm (formulario controlado), usePageTitle
├── App.jsx       rutas de la aplicación
└── main.jsx      punto de entrada (BrowserRouter)
```

## Rutas
| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/servicios` | Servicios (Compra, Alquiler, Tasaciones) |
| `/propiedades` | Galería de propiedades |
| `/contacto` | Formulario de contacto |

## Formulario de contacto
Es un formulario controlado con `useState` (dentro del hook `useForm`). Los cambios de cada campo, el envío y el reseteo se muestran en la consola del navegador (F12). No hay integración con servidor.
