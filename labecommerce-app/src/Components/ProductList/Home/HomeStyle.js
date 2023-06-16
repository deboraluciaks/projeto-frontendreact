import styled from 'styled-components';

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: white;
    align-items: center;
    
    @media (max-width: 980px) {
        width: 50vw;
    }

`

export const HeaderHome = styled.div`
    display: flex;
    

    p{
        margin-right: 400px;
    }

    @media (max-width: 1130px) {
      font-size: 12px ;
      margin: 5px;
    }

    @media (max-width: 980px) {
        flex-wrap: wrap;
        p{
            margin-right:300px;
        }
    }

    
`
export const Select = styled.select`
    width: 100px;
    margin: 0;
    padding: 2px;
    margin-left: 5px;
`

export const Container = styled.section`
    display: flex;
    align-self: center;
    flex-wrap: wrap;

    @media (max-width: 1250px) {
        justify-content: center;
    }

    @media (max-width: 980px) {
        flex-direction: column;
    }


`

