import styled from "styled-components";
import { Colores } from "../GlobalColor";

export const DivNav = styled.nav`
  display: flex;
  position: fixed;
  height: 70px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  width: calc(100% - 290px);
  z-index: 1;
  justify-content: space-between;
  background-color: ${Colores.fondo};
  padding-left: 20px;
  padding-right: 20px;
`;
