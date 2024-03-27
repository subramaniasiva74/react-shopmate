import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {

  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const {data: products, loading, error} = useFetch(url, {content: "ABCD"});
  console.log(products);

  // const getResponse = useCallback( async () => {
  //   const resObject = await fetch(url);
  //   const resText = await resObject.json();
  //   setProducts(resText);
  // }, [url])

  // async function getResponse() {
  //   const resObject = await fetch(url);
  //   const resText = await resObject.json();
  //   setProducts(resText);
  // }


  // useEffect(() => { getResponse(); }, [getResponse]);



  return (
    <div className="App">
      <h1>Products List</h1>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products") }>All</button>
        <button onClick={() => setUrl("http://localhost:8000/products?_sort=price") }>Sort price by asce</button>
      </div>
      <section>
        {loading && <p>Products are loading....</p>}
        {error && <p>{error}</p>}
        {products && products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In stock" : "Unavailable"}</span>
            </p>

          </div>
        ))}

      </section>
    </div>
  );
}

export default App;
