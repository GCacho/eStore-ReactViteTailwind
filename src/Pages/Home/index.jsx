import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  // Consumir API para las CARDS
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(datos => setProductos(datos))
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          productos?.map( producto => (
            <Card key={producto.id} datos={producto}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Home
