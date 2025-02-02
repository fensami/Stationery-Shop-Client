import { Button, Col, Row } from "antd";
import Breadcum from "../home/inner-page-components/Breadcum";
import SSInput from "../../components/form/SSInput";
import SSForm from "../../components/form/SSForm";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { varifyToken } from "../../utils/varifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  // const defaultValues = {
  //   email: "admin4@gmail.com",
  //   password: "admin123",
  // };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = varifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("login success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      // navigate(`/dashboard`);
    } catch (err) {
      toast.error("something wants wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <>
      <Breadcum title="Login" breadcrumbs="Login" />
      <section className="product-area section-gap-100">
        <div className="container ">
          <Row justify="center" align="middle">
            <Col lg={{ span: 12 }} span={24}>
              <div
                style={{
                  background: "#f8f8f8",
                  padding: "40px",
                  borderRadius: "10px",
                }}
              >
                <SSForm onSubmit={onSubmit}>
                  <SSInput type="text" name="email" label="Email" />
                  <SSInput type="password" name="password" label="Password" />
                  <Button htmlType="submit">Login</Button>
                </SSForm>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Login;
