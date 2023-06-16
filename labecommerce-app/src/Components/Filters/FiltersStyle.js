import styled from 'styled-components';

export const Filters = styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    background-color: black;
    gap: 16px;
    padding: 16px;
    width: 18vw;
    border: 1px solid #000;
    height: 300px;
    border-radius: 10px;
    justify-self: start;

    h1{
        margin-top: 40px;
        font-size: 18px;
    }

    @media (max-width: 1130px) {
        font-size: 12px ;
        width: 16vw;
    }

    @media (max-width: 980px) {
        width: 12vw;
    }

`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    gap: 10px;
    width: 70%;

    @media (max-width: 980px) {
        margin: 5px;
        padding: 4px;
    }
`
