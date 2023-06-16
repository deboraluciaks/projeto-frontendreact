import styled from 'styled-components';

export const CartStyle = styled.div`
    
    justify-self: end;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: black;
    height: 100vh;
    gap: 16px;
    padding: 16px;

    h1{
        font-size: 18px;
    }

    @media (max-width: 980px) {
        font-size: 14px;
        
    }

    @media (max-width: 750px) {
        display: flex;
        height: 100%;
        justify-content: center;
    }
    
`

