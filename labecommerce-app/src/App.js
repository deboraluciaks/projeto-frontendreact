import Filter from "./Components/Filters/Filters";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import styled from 'styled-components';
import { meusProdutos } from './assents/productList';
import React, { useState } from 'react';


const AppStyle = styled.div`

    display: grid;
    grid-template-rows: 1fr 4fr;
    background-image: url(https://wallpapercosmos.com/w/full/8/7/7/194290-3840x2160-desktop-4k-outer-space-wallpaper-photo.jpg);
    background-size: 100%;

    /* @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;     
    } */
`

const Body = styled.div`

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    /* @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;     
    } */
`



function App() {

  //  Home - Cart
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)

  
  //  Filters
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  
  function addCart (produtoAdd){

    const item = cart.find((produto) => produto.id === produtoAdd.produto.id)
    

    if(!item){
      cart.push({ id: produtoAdd.produto.id , name: produtoAdd.produto.name, value: produtoAdd.produto.value ,qtd : 1 })
        
        
        

    } else {
      item.qtd = item.qtd + 1;
        
    }

    setAmount(amount + produtoAdd.produto.value)
  }



  function removeCart (produtoRem){
    
    const check = cart.find((produto) => produto.id === produtoRem.produto.id);
    
    if(check && produtoRem.produto.qtd === 1 ){

      const itemRemovido = cart.filter((produto) =>  produto.id !== produtoRem.produto.id);      
      setCart(itemRemovido)
       

        
    } else {
      check.qtd = check.qtd - 1;

    }
    
    
    

    setAmount(amount - produtoRem.produto.value)
  }


  
  return (
    <AppStyle>
      <Header
        cart={cart}
      />
      <Body>

        <Filter
        meusProdutos={meusProdutos}

        minFilter={minFilter}
        setMinFilter={setMinFilter}

        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}

        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        />

        <Home
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}


        meusProdutos={meusProdutos}
        amount={amount}
        setAmount={setAmount}

        cart={cart}
        setCart={setCart}

        addCart={addCart}


        />
        <Cart 
        meusProdutos={meusProdutos}

        amount={amount}
        setAmount={setAmount}

        cart={cart}
        setCart={setCart}

        removeCart={removeCart}

        />
        
        
      </Body>
    </AppStyle>
  );
}

export default App;
