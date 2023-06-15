import styled from 'styled-components';

export const Card = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
    background-color: black;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin: 20px;
    border: 1px solid #000;
    width: 250px;
    height: 60vh;
    box-shadow: 3px 3px 20px white;
    border-radius: 10px;
    

    
    img{
        width: 200px;
    }

`
export const Dados = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    justify-content: center;
    align-self: center;
    

`

export const ButtonCard = styled.div`
    button{
        justify-self: end;
        font-size: 16px;
        width: 40px;
        height: 25px;
        background-color: yellow;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }
`

export const Text = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;   
    background-color: #000026;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 3px 3px 8px darkblue;
    border-radius: 5px;


    p{
        align-self: center;
        padding: 8px;
        
    }

`