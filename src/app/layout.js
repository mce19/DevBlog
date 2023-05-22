import { Outfit } from 'next/font/google';
import './globals.css'
import Navegation from './components/Navegation';


const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--fuente-principal'
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>
          El primer blog de Andres
        </title>
      </head>
      <body className={outfit.variable}>
     <Navegation/>
        {children}
        </body>
    </html>
  )
}
