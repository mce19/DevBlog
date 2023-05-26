import Image from "next/image";
import styles from '/styles/nosotros.module.css'
function AboutPage () {
    return (
        <main className="contenedor">
        <h1 className="heading">ANDRES</h1>

        <div className={styles.contenido}>
            <Image src="/modelo2.jpg" width={1000} height={800} alt="Sobre Andres Vargas"/>

            <div>
                <p>
                    Bienvenidos a mi blog, un espacio dedicado a compartir mi experiencia y conocimientos para fortalecer las relaciones de pareja. Aquí encontrarás valiosas guías y consejos basados en mis vivencias personales, con el objetivo de ayudarte a construir vínculos sólidos y duraderos. A lo largo de los años, he adquirido un profundo entendimiento de las dinámicas y desafíos que surgen en las relaciones. ¡Es un placer tenerlos aquí!</p>

                <p>
                    Exploraremos diversos aspectos fundamentales en las relaciones de pareja, desde la comunicación efectiva hasta la resolución constructiva de conflictos. Aprenderás cómo fomentar la confianza mutua, cultivar la intimidad emocional y mantener viva la chispa del romance a lo largo del tiempo. Además, te brindaré herramientas prácticas y ejercicios que podrás aplicar en tu día a día para fortalecer la conexión con tu ser amado. Ya sea que estés en una relación establecida o recién estés comenzando una nueva historia de amor. ¡Empecemos este apasionante viaje juntos!
                </p>
            </div>
        </div>
        </main>
      
    );
  }
  
  export default AboutPage;