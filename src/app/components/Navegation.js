import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route: '/about'
  
  
  }]

// una funcion con row fuctions
const Navegation = () => {
  return (
    <header>
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

export default Navegation;
