import styled from "styled-components";
import { Colores } from "../GlobalColor";

export const ButtonNext = styled.button`
background-color: ${Colores.AzulMar};
color: white;
margin-right: 10px;
height: 30px;
width: 100px;
border: none;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

&:hover {
    background-color: ${Colores.Azulclaro};
    cursor: pointer;
    color:${Colores.Blanco}
  }

&:active {
    transform: scale(0.98);
}
`;

export const ButtonRemove = styled.button`
  background-color: #ff0048;
  color: white;
  margin-right: 10px;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 10px;

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: red;
    cursor: pointer;
    color: ${Colores.Blanco};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonAdd = styled.button`
  background-color: ${Colores.AzulMar};
  color: white;
  margin-right: 10px;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 10px;

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f39708;
    cursor: pointer;
    color: ${Colores.Blanco};
  }

  &:active {
    transform: scale(0.98);
  }
`;
