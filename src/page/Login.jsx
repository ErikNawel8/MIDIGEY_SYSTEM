import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/Api/AuthApi";
import { useDispatch } from "react-redux";
import { JwtUtils } from "../utils";
import { Button, Form, Input, Spin, message } from "antd";
import LogoMediget from "../../src/images/logo-mediget.png";
import LogoMedigetParte2 from "../../src/images/logo-mediget-parte2.png";

import { setUser } from "../redux/Slice/authSlice";
import {
  DivContainerPageLogin,
  DivSubContainerPageLogin,
} from "./Login.Styled";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

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
      <DivContainerPageLogin>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <img src={LogoMediget} width={320} />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
          }}
        >
          <img src={LogoMedigetParte2} width={140} />
        </div>

        <DivSubContainerPageLogin>
          <center>
            <h1 style={{ fontWeight: "bold", color: "white", padding: "30px" }}>
              Inicia sesión
            </h1>
          </center>
          <Form
            layout="vertical"
            form={form}
            onFinish={(data) => onSubmit(data)}
          >
            <Form.Item
              label={
                <strong style={{ fontSize: "18px", color: "white" }}>
                  Usuario o Correo:
                </strong>
              }
              name={"NombreUsuario"}
            >
              <Input
                prefix={<FaUserCircle size={23} />}
                placeholder="Ingresa tu usuario o correo"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label={
                <strong style={{ fontSize: "18px", color: "white" }}>
                  Contraseña:
                </strong>
              }
              name={"Contraseña"}
            >
              <Input
                prefix={<MdLock size={24} />}
                placeholder="Ingresa tu contraseña"
                size="large"
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                style={{
                  background: "blue",
                  fontWeight: "bold",
                  color: "white",
                  width: "100%",
                }}
                type="primary"
                htmlType="submit"
                disabled={isLoading || loadingState}
              >
                {isLoading || loadingState ? <Spin /> : "Ingresar al sistema"}
              </Button>
            </Form.Item>

            <center>
              <span style={{ color: "white", fontWeight: "bold" }}>
                ¿Olvidaste tu contraseña?
              </span>
            </center>
          </Form>
        </DivSubContainerPageLogin>
      </DivContainerPageLogin>
    </>
  );
}
