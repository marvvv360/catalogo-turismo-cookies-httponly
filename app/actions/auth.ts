'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?message=Error al iniciar sesión: ' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const credentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signUp(credentials)

  if (error) {
    redirect('/registro?message=Error al registrarse: ' + encodeURIComponent(error.message))
  }

  // Si la verificación de correo está activada, no se crea sesión automática
  if (data?.user && !data.session) {
    redirect('/login?message=' + encodeURIComponent('¡Registro exitoso! Por favor, verifica tu correo electrónico para confirmar tu cuenta.'))
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/update-password`,
  })

  if (error) {
    redirect(`/recuperar?message=${encodeURIComponent(error.message)}`)
  }

  redirect(`/recuperar?message=${encodeURIComponent('Correo de recuperación enviado. Revisa tu bandeja.')}`)
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()
  const password = formData.get('password') as string

  const { error } = await supabase.auth.updateUser({
    password: password,
  })

  if (error) {
    redirect(`/auth/update-password?message=${encodeURIComponent(error.message)}`)
  }

  redirect('/dashboard?message=' + encodeURIComponent('Contraseña actualizada correctamente'))
}