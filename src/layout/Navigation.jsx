import { LabelNav } from "../components";

import { JwtUtils } from "../utils";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import Link from "antd/es/typography/Link";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Navigation() {
  const token = localStorage.getItem("token");
  const userRol = JwtUtils.getRolesByToken(token);

  const location = useLocation();
  const [ruta, setRuta] = useState(location.pathname);
  console.log("ruta", ruta);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "red",
          width: "290px",
        }}
      >
        <div style={{ display: "flex", width: "290px" }}>
          <div>
            <MdMenu />
          </div>
          <LabelNav
            style={{
              marginTop: 20,
              marginRight: 14,
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Jost",
              letterSpacing: 4,
              color: "#365583",
              overflow: "hidden",
            }}
          >
            GESTNETT
          </LabelNav>
        </div>

        {userRol === "Administrador" && (
          <Link
            onClick={() => {
              setRuta("/");
            }}
          >
            <BiHomeAlt2 />
            <span>Home</span>
          </Link>
        )}

        {(userRol === "Administrador" ||
          userRol === "Administrador" ||
          userRol === "Asistente") && (
          <Link
            onClick={() => {
              setRuta("/proyecto");
            }}
          >
            <BiHomeAlt2 />
            <span>Maquinarias</span>
          </Link>
        )}
      </div>
    </>
  );
}
