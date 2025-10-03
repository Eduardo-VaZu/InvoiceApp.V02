# 📄 Invoice App V02

> **Una aplicación moderna de facturación desarrollada con React, Vite y TailwindCSS**

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Características

- **✨ Interfaz Moderna**: Diseño limpio y profesional con TailwindCSS
- **📱 Responsive**: Completamente adaptable a diferentes tamaños de pantalla
- **➕ Agregar Items**: Funcionalidad para añadir productos/servicios a la factura
- **🗑️ Eliminar Items**: Posibilidad de remover elementos de la factura
- **💰 Cálculos Automáticos**: Totales y subtotales calculados dinámicamente
- **🖨️ Función de Impresión**: Preparado para imprimir facturas
- **🔄 Gestión de Estado**: Hooks personalizados para manejo eficiente del estado
- **💱 Formato de Moneda**: Formateo automático de valores monetarios
- **📄 Datos de Empresa y Cliente**: Información completa de facturación

## 🏗️ Arquitectura del Proyecto

```
invoiceApp.V02/
├── 📁 public/
│   └── logo-Vazu.jpeg
├── 📁 src/
│   ├── 📁 components/
│   │   ├── InvoiceApp.jsx              # Componente principal
│   │   └── 📁 invoice/
│   │       ├── InvoiceAddItemForm.jsx   # Formulario para agregar items
│   │       ├── InvoiceFormAdd.jsx       # Modal/formulario principal
│   │       ├── InvoiceHeader.jsx        # Encabezado de la factura
│   │       ├── InvoiceIconTrashRow.jsx  # Icono de eliminar
│   │       ├── InvoiceInformation.jsx   # Información de cliente y pago
│   │       ├── InvoiceItems.jsx         # Lista de items de la factura
│   │       ├── InvoiceRowItems.jsx      # Fila individual de item
│   │       └── InvoiceTotal.jsx         # Cálculos y totales
│   ├── 📁 data/
│   │   └── invoice.js                   # Datos de ejemplo de factura
│   ├── 📁 hooks/
│   │   ├── useForm.js                   # Hook para manejo de formularios
│   │   └── useInvoice.js                # Hook para lógica de facturación
│   ├── 📁 service/
│   │   └── getInvoice.js                # Servicio para obtener datos
│   ├── index.css                        # Estilos globales
│   └── main.jsx                         # Punto de entrada de la aplicación
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Componentes Principales

### 📋 **InvoiceApp**
Componente raíz que orquesta toda la aplicación de facturación.

### 🏢 **InvoiceHeader**
Muestra información de la empresa y número de factura.

### ℹ️ **InvoiceInformation** 
Contiene datos del cliente, información de pago y fechas.

### 📦 **InvoiceItems**
Renderiza la lista completa de productos/servicios en la factura.

### 🧮 **InvoiceTotal**
Calcula y muestra subtotales, impuestos y total final.

### ➕ **InvoiceFormAdd**
Modal/formulario para añadir nuevos items a la factura.

## 🔧 Hooks Personalizados

### 🎯 **useInvoice**
- Manejo del estado principal de la factura
- Funciones para agregar/eliminar items
- Formateo de moneda
- Función de impresión
- Lógica de productos duplicados

### 📝 **useForm**
- Gestión de formularios de entrada
- Validación de campos
- Reset de formulario tras envío
- Manejo de estados de entrada

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 7.1.2** - Build tool y dev server ultrarrápido
- **TailwindCSS 4.1.13** - Framework CSS utility-first
- **PropTypes 15.8.1** - Validación de tipos en React
- **ESLint 9.33.0** - Linter para JavaScript
- **Prettier 3.6.2** - Formateador de código

## 📋 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (generalmente viene con Node.js)
- **Git** (para clonar el repositorio)

## ⚙️ Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/Eduardo-VaZu/InvoiceApp.V02.git
cd InvoiceApp.V02
```

### 2️⃣ **Instalar Dependencias**

```bash
npm install
```

Esto instalará todas las dependencias necesarias incluyendo:
- React y React-DOM
- Vite
- TailwindCSS
- ESLint y Prettier
- Todas las herramientas de desarrollo

### 3️⃣ **Ejecutar en Modo Desarrollo**

```bash
npm run dev
```

✅ La aplicación estará disponible en: `http://localhost:5173`

### 4️⃣ **Construir para Producción**

```bash
npm run build
```

### 5️⃣ **Vista Previa de Producción**

```bash
npm run preview
```

### 6️⃣ **Ejecutar Linting**

```bash
npm run lint
```

## 📱 Uso de la Aplicación

### ➕ **Agregar Productos/Servicios**
1. Haz clic en el botón "Agregar Item"
2. Completa el formulario:
   - **Producto**: Nombre del producto o servicio
   - **Cantidad**: Número de unidades
   - **Precio**: Precio unitario
3. Haz clic en "Guardar" para añadir el item

### 🗑️ **Eliminar Items**
- Haz clic en el icono de basura (🗑️) en cualquier fila para eliminar ese item

### 🖨️ **Imprimir Factura**
- Utiliza el botón "Imprimir" para generar una versión imprimible

### 💰 **Cálculos Automáticos**
- Los totales se actualizan automáticamente al agregar/eliminar items
- El formato de moneda es en dólares estadounidenses (USD)

## 🎨 Personalización

### 🏢 **Datos de la Empresa**
Modifica `src/data/invoice.js` para cambiar:
- Nombre de la empresa
- Número fiscal
- Dirección

### 👤 **Información del Cliente**
Actualiza los datos del cliente en el mismo archivo:
- Nombre y apellidos
- Dirección completa
- Información de pago

### 🎨 **Estilos**
- Los estilos utilizan TailwindCSS
- Modifica las clases en los componentes para personalizar la apariencia
- Ajusta `src/index.css` para estilos globales

## 📋 Historial de Cambios y Mejoras

### 🔧 **Versión 1.2** - Refactorización del Sistema de Formularios

#### **Mejoras Implementadas:**

##### **🎯 useForm Hook Refactorizado**
- ✅ **Estado Unificado**: Consolidación de múltiples estados (`product`, `quantity`, `price`) en un objeto `formData`
- ✅ **Handler Genérico**: Implementación de `handleChange` para manejo universal de campos
- ✅ **Conversión Automática de Tipos**: Los campos numéricos se convierten automáticamente
- ✅ **Código Más Limpio**: Eliminación de setters individuales (`setproduct`, `setQuantity`, `setPrice`)

##### **📝 InvoiceAddItemForm Optimizado**
- ✅ **Import Simplificado**: Reducción de dependencias importadas del hook
- ✅ **Handler Unificado**: Un solo `handleChange` para todos los campos del formulario
- ✅ **Mejor Mantenibilidad**: Código más legible y fácil de extender
- ✅ **Patrón React Mejorado**: Implementación de mejores prácticas de React

#### **Beneficios Técnicos:**
- 🚀 **Mejor Performance**: Menos re-renders innecesarios
- 🔧 **Más Escalable**: Fácil agregar nuevos campos al formulario
- 🐛 **Menos Errores**: Reducción de bugs por manejo manual de estados
- 📚 **Código Limpio**: Siguiendo patrones modernos de React

#### **Estadísticas de Mejora:**
- **Archivos Optimizados**: 2 archivos principales
- **Líneas Refactorizadas**: +34 añadidas, -27 removidas
- **Funcionalidad**: Mantenida al 100% con mejor estructura

---

## 🧪 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run lint` | Ejecuta ESLint para encontrar errores |

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de ESLint
```bash
npm run lint
```

### Puerto ocupado
Cambia el puerto en `vite.config.js` o mata el proceso:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/macOS
lsof -ti:5173 | xargs kill -9
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Eduardo Vargas**
- GitHub: [@Eduardo-VaZu](https://github.com/Eduardo-VaZu)

## 🙏 Agradecimientos

- React Team por la excelente biblioteca
- Vite por el increíble rendimiento de desarrollo
- TailwindCSS por el framework CSS utilitario
- La comunidad open source por las herramientas y recursos

---

⭐ **¡No olvides dar una estrella al proyecto si te fue útil!** ⭐
