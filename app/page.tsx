import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white px-4">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop')` 
        }}
      />

      {/* Contenido principal superpuesto */}
      <div className="relative z-10 max-w-3xl text-center space-y-6">
        <span className="inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-semibold text-indigo-300 border border-indigo-500/30">
          Descubre El Salvador
        </span>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white drop-shadow-md">
          Catálogo de Turismo
        </h1>
        
        <p className="text-lg text-gray-200 sm:text-xl drop-shadow">
          Explora los destinos más hermosos, planifica tus próximas aventuras y gestiona tus lugares favoritos en un solo lugar con total seguridad.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            href="/login" 
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
          >
            Iniciar Sesión
          </Link>
          
          <Link 
            href="/registro" 
            className="rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md border border-white/20 transition hover:bg-white/20"
          >
            Crear Cuenta
          </Link>
        </div>
      </div>
    </main>
  )
}