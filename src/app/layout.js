import { Outfit } from 'next/font/google';
import './globals.css'
import Headerpage from './header/page';
import Footerpage from './footer/page';




const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--fuente-principal'
});

export default function RootLayout({ children, title = 'Andres Vargas', description = '' }) {
  return (
    <html lang="es">
      <head>
        <title>
          {`${title}`}
        </title>
      </head>
      <body className={outfit.variable}>
     < Headerpage />
        {children}
<Footerpage/>
        </body>
    </html>
  )
}
