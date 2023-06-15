import { ItemStyle } from './ItensStyle'
import { MdDeleteOutline } from 'react-icons/md';


function Itens(props) {

    const { produto } = props
    const { removeCart } = props

  
    return (
        <ul>
            <ItemStyle >
        
                <p>{props.name} x {props.qtd}</p>
                        
                <button
                    onClick={() => removeCart({produto})}
                ><MdDeleteOutline/></button>

                </ItemStyle>
    

        </ul>
        
        
        
    )
}

export default Itens;