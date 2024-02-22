import { Outlet } from "react-router-dom";
import { Column, Row } from "../components";
import MenuBar from "../layout/MenuBar";
import Navigation from "../layout/Navigation";

export default function Layout() {
  return (
    <>
      <Row>
        <Navigation />
        <Column>
          <MenuBar />
          <Outlet />
        </Column>
      </Row>
    </>
  );
}
