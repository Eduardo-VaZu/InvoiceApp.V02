# 📋 Invoice Tech Solutions

Una moderna aplicación web para la gestión y creación de facturas, desarrollada con React y TailwindCSS.

## 🎯 Descripción

Invoice Tech Solutions es una aplicación de gestión de facturas que permite crear, editar y administrar facturas de manera eficiente. La aplicación cuenta con una interfaz intuitiva y responsive, diseñada para facilitar el proceso de facturación en pequeñas y medianas empresas.

## ⚡ Características

- ✅ Creación y edición de facturas
- ✅ Gestión de items de facturación
- ✅ Cálculo automático de totales
- ✅ Interfaz responsive y moderna
- ✅ Almacenamiento local de datos
- ✅ Validación de formularios
- ✅ Estados de carga y manejo de errores

## 🛠️ Stack Tecnológico

### Frontend
- **React** 19.1.1 - Biblioteca de JavaScript para interfaces de usuario
- **Vite** 7.1.2 - Herramienta de construcción y desarrollo rápida
- **TailwindCSS** 4.1.13 - Framework de CSS utilitario
- **PropTypes** - Validación de tipos para componentes

### Desarrollo
- **ESLint** - Linter para JavaScript/React
- **Prettier** - Formateador de código
- **SWC** - Compilador rápido de JavaScript/TypeScript

## 📋 Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/invoiceApp.V02.git
   cd invoiceApp.V02
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   Visita `http://localhost:5173` para ver la aplicación

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

## 📁 Estructura del Proyecto

```
invoiceApp.V02/
│
├── 📁 public/
│   └── logo-Vazu.jpeg          # Logo de la aplicación
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 invoice/         # Componentes de facturación
│   │   │   ├── InvoiceApp.jsx
│   │   │   ├── InvoiceHeader.jsx
│   │   │   ├── InvoiceInformation.jsx
│   │   │   ├── InvoiceItems.jsx
│   │   │   ├── InvoiceAddItemForm.jsx
│   │   │   ├── InvoiceRowItems.jsx
│   │   │   ├── InvoiceTotal.jsx
│   │   │   ├── InvoiceFormAdd.jsx
│   │   │   └── InvoiceIconTrashRow.jsx
│   │   │
│   │   └── 📁 ui/              # Componentes de interfaz
│   │       ├── ErrorMessage.jsx
│   │       └── LoadingSpinner.jsx
│   │
│   ├── 📁 hooks/               # Custom Hooks
│   │   ├── useForm.js
│   │   ├── useInvoice.js
│   │   └── useInvoiceData.js
│   │
│   ├── 📁 service/             # Servicios y utilidades
│   │   ├── getInvoice.js
│   │   └── localStorageService.js
│   │
│   ├── 📁 data/                # Datos y configuración
│   │   └── invoice.js
│   │
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
│
├── index.html                  # Template HTML
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── eslint.config.js            # Configuración de ESLint
```

## 🏗️ Arquitectura

### Componentes Principales

- **InvoiceApp**: Componente principal que orquesta la aplicación
- **InvoiceHeader**: Cabecera con información de la empresa
- **InvoiceInformation**: Formulario de datos del cliente
- **InvoiceItems**: Lista de items de la factura
- **InvoiceTotal**: Cálculo y visualización de totales

### Custom Hooks

- **useInvoice**: Gestiona el estado global de la factura
- **useInvoiceData**: Maneja la persistencia de datos
- **useForm**: Utilidades para manejo de formularios

### Servicios

- **localStorageService**: Persistencia en localStorage
- **getInvoice**: Servicios de obtención de facturas

## 🎨 Personalización

### Estilos
La aplicación utiliza TailwindCSS para el styling. Puedes personalizar:

- Colores y tema en `tailwind.config.js`
- Estilos globales en `src/index.css`
- Componentes individuales mediante clases de Tailwind

### Configuración
- **Vite**: `vite.config.js`
- **ESLint**: `eslint.config.js`
- **Prettier**: `.prettierrc` (crear si es necesario)

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Previsualizar Build
```bash
npm run preview
```

### Opciones de Despliegue
- **Netlify**: Conecta tu repositorio para despliegue automático
- **Vercel**: Importa el proyecto desde GitHub
- **GitHub Pages**: Usa GitHub Actions para despliegue
- **Servidor propio**: Sube la carpeta `dist/` a tu servidor

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa los [Issues](https://github.com/tu-usuario/invoiceApp.V02/issues) existentes
2. Crea un nuevo Issue si no encuentras solución
3. Contacta al equipo de desarrollo

## 🔄 Changelog

### v0.0.0 (Actual)
- ✅ Implementación inicial de la aplicación
- ✅ Sistema de gestión de facturas
- ✅ Interfaz responsive con TailwindCSS
- ✅ Persistencia con LocalStorage

---

**Desarrollado con ❤️ por el equipo de Tech Solutions**
