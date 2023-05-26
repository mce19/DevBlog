// una funcion con row fuctions
function Shoppage () {
    return (
      <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
              {guitarras?.map(guitarra => (
                  <Guitarra
                      key={guitarra.id}
                      guitarra={guitarra.attributes}
                  />
              ))}
            </div>
        </main>
    );
  }
  
  export default Shoppage;