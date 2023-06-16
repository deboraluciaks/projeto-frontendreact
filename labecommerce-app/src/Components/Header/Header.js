import { Topo } from './HeaderStyle';
import logo2 from '../../imgs/logo2.png';
import { IoMdCart } from 'react-icons/io';


function Header(props) {

    const { cart } = props

    

    return (
        
        <Topo>
            
            <img src={logo2} alt='logo'/>
            <button type="button" ><IoMdCart/>
            {cart.map((produto) => {
                return (
                    <span
                    key={produto.id}
                    >{produto.qtd}</span>
                )
            })}
            </button>
            
        </Topo>
    )
}

export default Header;