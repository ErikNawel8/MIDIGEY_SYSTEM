import { JwtUtils } from "../utils";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdMargin, MdMenu } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { StyledLink } from "./Navigation.styled";
import { MdCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const token = localStorage.getItem("token");
  const userRol = JwtUtils.getRolesByToken(token);

  const location = useLocation();
  const [ruta, setRuta] = useState(location.pathname);
  console.log(ruta);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#003A92",
          width: "290px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "290px",
            padding: "20px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <MdMenu color="white" size={30} />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Jost",
              color: "white",
              overflow: "hidden",
            }}
          >
            MEDIGET
          </span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {/************************************************************************/}
          {(userRol === "Administrador" ||
            userRol == "Administrdor de centro" ||
            userRol == "Administrador de inventario" ||
            userRol == "Asistente") && (
            <StyledLink
              onClick={() => {
                setRuta("/");
              }}
            >
              <MdHome style={{ marginRight: "10px" }} size={22} color="white" />
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Inicio
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" ||
            userRol === "Administrador de centro") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
              }}
            >
              <MdMargin
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Administrar equipamento
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" ||
            userRol === "Administrador de centro") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
                navigate("/materiales-lista");
              }}
            >
              <MdCategory
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Administrar materiales
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" || userRol === "Asistente") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
              }}
            >
              <GrUserAdmin
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Gestionar Roles
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" || userRol === "Asistente") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
              }}
            >
              <FaUserCog
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Control de usuario
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" || userRol === "Asistente") && (
            <StyledLink
              onClick={() => {
                navigate("/proveedores")
              }}
            >
              <MdLocalShipping
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Gestionar proveedores
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" || userRol === "Asistente") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
                navigate("/empleados");
              }}
            >
              <BsPersonVcard
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Gestionar empleados
              </span>
            </StyledLink>
          )}

          {/************************************************************************/}
          {(userRol === "Administrador" || userRol === "Asistente") && (
            <StyledLink
              onClick={() => {
                setRuta("/proyecto");
              }}
            >
              <IoDocumentTextOutline
                style={{ marginRight: "10px" }}
                size={22}
                color="white"
              />
              <span
                style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
              >
                Gestionar reportes
              </span>
            </StyledLink>
          )}
        </div>
      </div>
    </>
  );
}
