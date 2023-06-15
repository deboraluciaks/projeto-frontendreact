import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart(props) {

    const { cart } = props
    const { amount } = props
    const { removeCart } = props
    
    return (
        <CartStyle>
            <h1>Carrinho</h1>
            {cart.map((produto, index) => {
                return (
                    <Itens 
                        key={index}
                        cart={cart}
                        produto={produto}
                        removeCart={removeCart}
                        name={produto.name}
                        valor={produto.value}
                        id={produto.id}
                        qtd={produto.qtd}
                    />
                )
            })}
                       
            <p>Valor total: R$ {amount},00 </p>
        </CartStyle>
    )
}

export default Cart;