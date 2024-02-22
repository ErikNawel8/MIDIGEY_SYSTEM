import Link from "antd/es/typography/Link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: 5px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: #5B69A9; /* Cambia el color de fondo al pasar el mouse sobre el componente */
  }
`;
