import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/Api/AuthApi";
import { useDispatch } from "react-redux";
import { JwtUtils } from "../utils";
import { Button, Form, Input, Spin, message } from "antd";

import { setUser } from "../redux/Slice/authSlice";

export default function Login() {
  const [form] = Form.useForm();
  const [loadingState, setLoadingloadingState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isLoading }] =
    useLoginUserMutation();

  const dispatchUser = useCallback(() => {
    if (!isLoading && loginData?.result != "" && loginData?.result != null) {
      dispatch(
        setUser({
          token: loginData?.result,
        })
      );
    }
  }, [dispatch, isLoading, loginData?.result]);

  useEffect(() => {
    if (isLoginSuccess) {
      if (loginData?.result != null && loginData?.result != "") {
        console.log("autenticacion correcta");
        setLoadingloadingState(true);
        dispatchUser();
        message.success("Sesión iniciada correctamente", 3);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3 * 1000);
      } else {
        setLoadingloadingState(false);
        message.error({
          content:
            "Error al iniciar sesión, verifique sus datos e intente de nuevo",
        });
      }
    }
  }, [isLoginSuccess, loginData?.result, navigate, dispatchUser]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (JwtUtils.verifyTokenExpiration(token)) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  /// destruturacion de componente useform ----
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  /// -----------------------------------
  const onSubmit = async (data) => {
    console.log("qlq");
    await loginUser(data);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            background: "#003A92",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontWeight: "bold", color: "white", padding: "30px" }}>
            Inicia sesión con tus datos
          </h1>
          <Form form={form} onFinish={(data) => onSubmit(data)}>
            <Form.Item
              label={
                <strong style={{ fontWeight: "bold", color: "white" }}>
                  Usuario o Correo
                </strong>
              }
              name={"NombreUsuario"}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={
                <strong style={{ fontWeight: "bold", color: "white" }}>
                  Contraseña
                </strong>
              }
              name={"Contraseña"}
            >
              <Input type="password" />
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  background: "blue",
                  fontWeight: "bold",
                  color: "white",
                  minWidth: "200px",
                }}
                type="primary"
                htmlType="submit"
                disabled={isLoading || loadingState}
              >
                {isLoading || loadingState ? <Spin /> : "Ingresar al sistema"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
