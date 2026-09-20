import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
      <Link href="/" className="text-lg font-bold text-indigo-600">
        Catálogo Turismo SV
      </Link>
      
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <span className="text-sm text-gray-600">Hola, {session.user.email}</span>
            <Link 
              href="/dashboard" 
              className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              Panel de Control
            </Link>
          </>
        ) : (
          <>
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-600 hover:text-indigo-600"
            >
              Iniciar Sesión
            </Link>
            <Link 
              href="/registro" 
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}