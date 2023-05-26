import Link from 'next/link'
import styles from '/styles/footer.module.css'

function Footerpage () {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
      <nav className={styles.navegacion}>
     <Link href="/" className={styles.enlace}>
  Inicio
     </Link>
     <Link href="/about">
  Nosotros
     </Link>
     <Link href="/shop">
  Tienda
     </Link>
       </nav>

       <p className={styles.copyright}>Desarrollado por <span>Maykol Castro {new Date().getFullYear()}</span></p>
      </div>
    </footer>
  );
}

export default Footerpage;