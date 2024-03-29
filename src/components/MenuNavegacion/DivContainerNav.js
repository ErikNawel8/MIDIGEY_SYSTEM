import styled from "styled-components";
import { LabelNav } from "./LabelNav";
import { Colores } from "../GlobalColor";

export const DivContainerNav = styled.div`
  position: fixed;
  z-index: 5;
  flex-direction: column;
  width: 80px;
  height: 100%;
  background-color: ${Colores.Blanco};
  // border: 1px solid #e4e4e4;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    width: 230px;
  }

  &:hover ${LabelNav} {
    display: flex;
  }
`;
