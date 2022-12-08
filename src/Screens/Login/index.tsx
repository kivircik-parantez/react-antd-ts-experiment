import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import { BUTTONS_ROUTE } from "../../routes";

const Login: FunctionComponent = () => {
  useEffect(() => {
    console.log("login");
    // dispatch(incrementByAmount(10));
  }, []);
  return (
    <>
      <div>login</div>
      <Link to={BUTTONS_ROUTE}>login</Link>
    </>
  );
};

export default Login;
