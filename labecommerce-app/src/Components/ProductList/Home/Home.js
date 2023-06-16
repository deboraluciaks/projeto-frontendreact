import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle, HeaderHome, Container, Select } from './HomeStyle'
import React, { useState } from 'react';

function Home(props) {

    const [ordination, setOrdination] = useState("")

    const { meusProdutos } = props
    const { searchFilter } = props
    const { minFilter } = props
    const { maxFilter } = props
    const { addCart } = props

    var prdts = meusProdutos.length;


    const handleOrdem = (e) => {
        setOrdination(e.target.value)
    }

    

    return (
      <HomeStyle>

        <HeaderHome>
                <p>Quantidade de produtos: {prdts}</p>
                
                <label>Ordenação:
                    <Select
                    value={ordination}
                    onChange={handleOrdem}
                    >
                        <option
                        value={"Crescente"}
                        >
                            Crescente
                        </option>
                        <option
                        value={"Decrescente"}
                        >
                            Decrescente
                        </option>
                    </Select>
                </label>
        </HeaderHome>   

        <Container>
                
            {meusProdutos.sort((produtoA, produtoB) => {
              if(ordination === "Crescente" && produtoA.name < produtoB.name){
                return -1;
              } else if (ordination === "Decrescente" && produtoA.name > produtoB.name){
                return -1;
              } else{
                return 0;
              }
              }).filter((produto) => {
                  return produto.name.toLowerCase().includes(searchFilter.toLowerCase());
                })
                  .filter((produto) => {
                    
                        if(maxFilter && minFilter){
                          return produto.value <= maxFilter && produto.value >= minFilter

                        } else if(maxFilter){
                          return produto.value <= maxFilter
                          
                        }else if(minFilter){
                          return produto.value >= minFilter
                          
                        }else{
                          return produto
                        }

                      })
                        .map((produto) => {
                          return (
                            <ProductCard

                            key={produto.id}
                            addCart={addCart}
                            name={produto.name}
                            valor={produto.value}
                            img={produto.imageUrl}
                            produto={produto}

                            />
                );
          })}
                

        </Container>


      </HomeStyle>
    )
}

export default Home;