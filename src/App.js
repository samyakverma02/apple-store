import './App.css';
import { useState,useEffect } from 'react';
import productsData from './products.json';

function App() {
    const [textinput, settextinput] = useState("")
    const [products, setproducts] = useState(productsData)

    useEffect(() => {
      let filteredData = productsData.filter((product) =>
      product.name.toLowerCase().includes(textinput.toLowerCase())
      )
      setproducts(filteredData)
    }, [textinput])
    
  
   
  return (
    <div className="App">
        <h1>Mobile Store</h1>
      
        <input type="text" name="" id="" onChange={(e)=>settextinput(e.target.value)}/>
        <h3>This is Input = {textinput}</h3>
          <div>
            {products.map((products) => (
              <>
              <h1>{products.name}</h1>
              <h2>{products.price}</h2>
              <p>{products.description}</p>
              <button onClick={()=> window.open(`https://api.whatsapp.com/send?phone=7986142787&text= I want to buy ${products.name}`)}>Buy on Whatsapp</button>
              <hr></hr>
              </>
            ))}
          </div>
    </div>
  );
}

export default App;

