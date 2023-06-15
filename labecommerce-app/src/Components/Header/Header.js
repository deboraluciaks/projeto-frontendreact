import { Topo } from './HeaderStyle';
import logo2 from '../../imgs/logo2.png';
import { IoMdCart } from 'react-icons/io';


function Header(props) {

    const { cart } = props
    const { showCart } = props
    const { style } = props
    

    return (
        
        <Topo>
            
            <img src={logo2}/>
            <button type="button" ><IoMdCart/>
            {cart.map((produto) => {
                return (
                    <span>{produto.qtd}</span>
                )
            })}
            </button>
            
        </Topo>
    )
}

export default Header;