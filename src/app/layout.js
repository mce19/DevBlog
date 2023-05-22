import { Outfit } from 'next/font/google';
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--fuente-principal'
});

export const metadata = {
  title: 'Blog de Andres Vargas',
  description: 'Creado por Maykol Castro O',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>{children}</body>
    </html>
  )
}
