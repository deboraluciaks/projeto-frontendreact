import styled from 'styled-components';

export const ItemStyle = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 14px;
    align-items: center;
    box-shadow: rgba(255,255,255, 0.3) 0px 2px 4px 0px, rgba(255,255,255, 0.3) 0px 2px 16px 0px;
    border-radius: 5px;
    width: 250px;
    padding: 10px;
    margin: 10px;
    
    
    button{
        justify-self: end;
        font-size: 16px;
        width: 25px;
        height: 25px;
        background-color: yellow;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }

`