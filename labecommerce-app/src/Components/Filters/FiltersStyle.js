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



    @media (max-width: 750px) {
      display: flex;  
      flex-direction: row;
      height: 100px;
      align-self: center;
      border-radius: 0;
      width: 80vw;
      margin: 0;

      h1{
        justify-content: center;
        margin: 0;
        align-self: center;
      }
    }

    @media (max-width: 480px) {
      margin: 0;
      padding: 0;
      align-self: center;
      width: 90vw;
  

      h1{
        justify-content: center;
      }
    }

`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 10px;
    gap: 10px;
    width: 70%;

    @media (max-width: 750px) {
        flex-direction: row;
        height: 30px;
        padding: 15px;
        width: 80%;
        align-self: center;

        input{
          width: 70%
        }
    }

    @media (max-width: 480px) {
      margin-right: 10px;
      padding: 0;
      align-self: center;
      width: 80%;

      input{
        width: 70%
      }
    }
`
