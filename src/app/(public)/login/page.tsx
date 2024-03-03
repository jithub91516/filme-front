"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { Button, Col, Form, Input, Row } from "antd";

export default function Login() {
  const { router } = useNavigation();

  const handleLogin = () => {
    router.push("/main");
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
      }}
    >
      <Col
        md={11}
        xl={11}
        xxl={11}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div>
          <span style={{ fontSize: "30px", fontWeight: 500 }}>LOGIN</span>
        </div>
        <span
          style={{
            fontSize: "21px",
            marginBottom: 45,
          }}
        >
          Sign in to continue
        </span>
        <Form name="login" onFinish={handleLogin} style={{ width: "100%" }}>
          <Form.Item label="아이디" name="user_name">
            <Input placeholder="아이디를 입력해주세요." size="large" />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            style={{ marginBottom: 64 }}
          >
            <Input.Password
              placeholder="비밀번호를 입력해주세요."
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              style={{
                width: "100%",
                marginBottom: 17,
                color: "rgba(0, 0, 0, 0.60)",
              }}
              size="large"
              // loading={isLoading}
            >
              로그인
            </Button>
            <Button
              size="large"
              type="default"
              style={{
                width: "100%",
                color: "rgba(0, 0, 0, 0.60)",
              }}
              // onClick={() => onSignupClick()}
            >
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
