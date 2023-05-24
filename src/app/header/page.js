import Link from 'next/link'
import Image from "next/image";

const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route: '/about'
  },{
    label: 'Footer',
    route: '/footer'
  }]

// una funcion con row fuctions
const Headerpage = () => {
  return (
    <header >
          <div className="contenedor">
    <Image
      src="/logo-p-svg.svg"
      width={100}
      height={40}
      alt="Andres Vargas"/>
    </div>
  <nav>
    <ul>
    {links.map(({ label, route }) =>(
      <li key={route}>
       <Link href={route}>
        {label}
       </Link>
      </li>
    ))}
    </ul>
  </nav>
</header>
  );
}

export default Headerpage;
