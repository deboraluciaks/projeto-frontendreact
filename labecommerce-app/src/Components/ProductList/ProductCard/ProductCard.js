import { Card, Dados, Text, ButtonCard } from './ProductCardStyle'
import { TbShoppingCartPlus } from 'react-icons/tb';

function ProductCard(props) {


    const { produto } = props
    const { addCart } = props

    

    return (
        <Card>
            <ButtonCard>
                <button 
                onClick={() => addCart({produto})}
                ><TbShoppingCartPlus/>
                </button>
            </ButtonCard>
            
            <img src={props.img} alt='img'/>
            <Dados>

                <Text>
                    <p>{props.name}</p>
                    <p>{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </Text>



            </Dados>
        </Card>
        
    )
}

export default ProductCard;