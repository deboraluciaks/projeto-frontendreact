import styled from 'styled-components';

export const Topo = styled.header`
display: grid;
grid-template-columns: 3fr 1fr;
background-color: black;
color: white;
padding: 20px;

img{
  margin-left: 10px;
  width: 300px;
  height: 120px;
}

button{
  position: relative;
  display: flex;
  font-size: 25px;
  color: white;
  margin: 45px;
  justify-self: end;
  background: none;
  border: none;
  cursor: pointer;
}

span{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  font-size: 10px;
  font-weight: 800;
  color: black;
}

`