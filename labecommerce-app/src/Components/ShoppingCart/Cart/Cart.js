import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart(props) {

    const { cart } = props
    const { amount } = props
    const { removeCart } = props
    
    return (
        <CartStyle>
            <h1>Carrinho</h1>
            {cart.map((produto) => {
                return (
                    <Itens 
                        key={produto.id}
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
                       
            <p>Valor total: {amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
        </CartStyle>
    )
}

export default Cart;