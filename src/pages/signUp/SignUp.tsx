import Breadcum from "../home/inner-page-components/Breadcum";
import { Button, Col, Row } from "antd";
import SSForm from "../../components/form/SSForm";
import SSInput from "../../components/form/SSInput";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { varifyToken } from "../../utils/varifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signup] = useSignupMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sign up");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await signup(userInfo).unwrap();
      const user = varifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("signup success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      // navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("something wants wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <>
      <Breadcum title="Sign Up" breadcrumbs="Sign Up" />
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
                  <SSInput type="text" name="name" label="Name" />
                  <SSInput type="text" name="email" label="Email" />
                  <SSInput type="password" name="password" label="Password" />
                  <Button className="primary-btn" htmlType="submit">
                    Sign Up
                  </Button>
                </SSForm>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SignUp;
