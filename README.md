# Catálogo de Turismo - Next.js y Supabase (Autenticación Segura con Cookies httpOnly)

Aplicación web moderna y robusta desarrollada como un catálogo de destinos turísticos, construida bajo altos estándares de arquitectura, tipado estricto y seguridad web utilizando Next.js (App Router), TypeScript, Tailwind CSS y Supabase como backend serverless.

---

## 🚀 Características Principales

* **Arquitectura Moderna con Next.js App Router**: Uso intensivo de Server Components y Server Actions para optimizar el rendimiento y la seguridad.
* **Autenticación Robusta con Cookies httpOnly**: Implementación de @supabase/ssr para la gestión segura de sesiones, evitando vulnerabilidades de almacenamiento en el cliente.
* **Protección de Rutas mediante Middleware**: Control de acceso automatizado que protege las rutas privadas (/dashboard) y redirige inteligentemente según el estado de la sesión.
* **Flujo Completo de Gestión de Usuarios**:
  - Registro e inicio de sesión con validación de formularios.
  - Verificación de correo electrónico.
  - Recuperación y actualización de contraseña segura (/recuperar y /auth/update-password).
  - Cierre de sesión (sign out).
* **Navegación Condicional**: Barra de navegación dinámica que se adapta en tiempo real según el estado de autenticación del usuario.
* **Tipado Estricto con TypeScript**: Código tipado de extremo a extremo para garantizar la escalabilidad y mantenibilidad del sistema.

---

## 🛠️ Stack Tecnológico

* **Framework Frontend/Backend:** Next.js (App Router)
* **Lógica de Servidor:** Server Actions, TypeScript
* **Estilos:** Tailwind CSS
* **Base de datos y Autenticación:** Supabase (@supabase/ssr)
* **Despliegue:** Vercel

---

## 📋 Requisitos Previos

Asegúrate de contar con lo siguiente antes de comenzar:
* Node.js (Versión 18.x o superior)
* Administrador de paquetes npm
* Una cuenta activa y un proyecto configurado en Supabase

---

## ⚙️ Instalación y Configuración Local

1. Clonar el repositorio:
   git clone <https://github.com/marvvv360/catalogo-turismo-cookies-httponly.git>
   cd catalogo-turismo-cookies-httponly

2. Instalar las dependencias:
   npm install

3. Configurar las variables de entorno:
   Crea un archivo llamado .env.local en la raíz del proyecto y añade las siguientes credenciales de tu proyecto de Supabase:
   
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aqui
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_publica_anon_aqui
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   > **Nota de seguridad:** Nunca subas el archivo .env.local con tus credenciales reales a GitHub. Este archivo ya se encuentra incluido en el .gitignore.

4. Iniciar el servidor de desarrollo local:
   npm run dev

   La aplicación estará corriendo y lista para probarse en http://localhost:3000.

---

## ☁️ Despliegue en Producción (Vercel)

Para desplegar esta aplicación asegurando que las cookies httpOnly y las redirecciones funcionen correctamente en producción:

1. Sube tu código fuente a un repositorio en GitHub.
2. Importa el proyecto en tu panel de Vercel.
3. Configura las siguientes Variables de Entorno en la sección de configuración del proyecto en Vercel:
   * NEXT_PUBLIC_SUPABASE_URL
   * NEXT_PUBLIC_SUPABASE_ANON_KEY
   * NEXT_PUBLIC_SITE_URL (Asegúrate de colocar la URL definitiva que te proporcione Vercel, ej: https://tu-proyecto.vercel.app).
4. En tu panel de Supabase, ve a Authentication > URL Configuration y actualiza el campo Site URL y las Redirect URLs con tu dominio de Vercel para permitir las redirecciones de autenticación y recuperación de claves.
5. Haz clic en Deploy.