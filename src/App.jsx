import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  // Estado para el contador del botón
  const [count, setCount] = useState(0);

  return (
    // Contenedor principal. Usamos flexbox para centrar y un fondo oscuro.
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      
      {/* Sección de los logos */}
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img 
            // Clases de Tailwind para el tamaño, padding, sombra al pasar el cursor y transición.
            className="w-24 h-24 p-4 transition-shadow duration-300 rounded-full hover:drop-shadow-[0_0_2em_#646cffaa]" 
            src={viteLogo} 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img 
            // Clases de Tailwind para el tamaño, padding, sombra al pasar el cursor y transición.
            className="w-24 h-24 p-4 transition-shadow duration-300 rounded-full hover:drop-shadow-[0_0_2em_#61dafb99]" 
            src={reactLogo} 
            alt="React logo" 
          />
        </a>
      </div>

      {/* Título principal */}
      <h1 className="mb-8 text-5xl font-bold">Vite + React</h1>

      {/* Sección de la tarjeta con el botón */}
      <div className="flex flex-col items-center w-full max-w-sm p-6 mb-4 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg">
        <button 
          onClick={() => setCount((count) => count + 1)}
          // Clases de Tailwind para el estilo del botón.
          className="px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Edit <code className="px-1 py-0.5 font-mono bg-gray-700 rounded-md">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Sección de la nota de pie */}
      <p className="text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  )
}



export default App
