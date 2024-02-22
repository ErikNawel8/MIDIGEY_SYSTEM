import { Button } from "antd";
import { Link } from "react-router-dom";

export default function ErrorPages() {
  return (
    <>
      <h3>UPS! Ha ocurrido un error fatal </h3>
      <Link to="/login">
        <Button>Recargar</Button>
      </Link>
    </>
  );
}
