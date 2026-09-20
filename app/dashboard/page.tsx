import { createClient } from '@/utils/supabase/server'
import { signout } from '@/app/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Panel de Control</h1>
        <p className="text-gray-600 mb-6">Bienvenido al sistema protegido, <span className="font-semibold">{user?.email}</span></p>
        
        <form action={signout}>
          <button 
            type="submit" 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Cerrar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}