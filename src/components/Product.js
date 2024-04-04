import React from 'react'


const Product = ({product,basket,setBasket}) => {

  function addBasket(){
    
  }

  return (
    <div>
        <div className='product'>
            <div className='countProduct'>
                <button onClick={addBasket}> + </button>        <b> 0</b>         <button> - </button>
            </div>
            <img src={product.img} />
            <div className='productsinfo'> 
                <p> {product.name}</p>
                <p> $ {product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product   