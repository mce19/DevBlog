import Head from "next/head";

// una funcion con row fuctions
 function Layout ({children, title, description}) {
  return (
  <>
  <Head>
    <title>{`BlogLA - ${title}`}</title>
  </Head>
  <h1>Desde Layout nuevo</h1>
  </>
  );
}

export default layout;