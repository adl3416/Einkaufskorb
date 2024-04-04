import './index.css';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Basket from './components/Basket';


function App() {

  const [basket, setBasket] = useState([]);  



  return (
    < >
 
     <Header/>
     <div className='productContainer'>
      <div className='productBoxs'>
        
        {products.map(product => (  // olusturulan product. Component olan Product  e asagidaki gibi gönderiyoruz
            <Product basket={basket}  setBasket={setBasket}   product={product}/>
        ))}

      </div>
      <Basket/>

     </div>
    </>
  );
}

export default App;
