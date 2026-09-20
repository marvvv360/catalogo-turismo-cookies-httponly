import { resetPassword } from '@/app/actions/auth'
import Link from 'next/link'

export default async function RecuperarPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const params = await searchParams;
  const message = params.message;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Recuperar Contraseña</h1>
        
        {message && (
          <div className="mb-4 rounded-md bg-blue-50 p-3 text-sm text-blue-700 border border-blue-200">
            {message}
          </div>
        )}

        <form action={resetPassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="ejemplo@correo.com"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Enviar enlace de recuperación
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="text-indigo-600 hover:underline">
            ← Volver a Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  )
}