import Link from 'next/link'
import Image from "next/image";
import styles from '/styles/header.module.css'



// una funcion con row fuctions
const Headerpage = () => {
  return (
    <header className={styles.header}>
     <div className={`contenedor ${styles.barra}`}>

    <Link href={'/'}>
    <Image
      src="/logo-p-svg.svg"
      width={100}
      height={40}
      alt="Andres Vargas"/>
    </Link>

    <nav className={styles.navegacion}>
     <Link href="/" className={styles.enlace}>
  Inicio
     </Link>
     <Link href="/about">
  Nosotros
     </Link>
     <Link href="/footer">
  Blog
     </Link>
     <Link href="/shop">
  Tienda
     </Link>
       </nav>
    </div>
  </header>
  );
}

export default Headerpage;
