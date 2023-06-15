import styled from 'styled-components';

export const Filters = styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    background-color: black;
    gap: 16px;
    padding: 16px;
    width: 190px;
    border: 1px solid #000;
    height: 300px;
    border-radius: 10px;
    justify-self: start;

    h1{
        margin-top: 40px;
        font-size: 18px;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    gap: 10px;
    width: 70%;
`
