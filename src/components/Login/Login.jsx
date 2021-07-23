import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./Login.scss";
import axios from "axios";
import { useStateValue } from "../../redux/StateProvider";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { baseURL } from "../global/config";

function Login() {
  //   const history = useHistory();

  const { state, dispatch } = useStateValue();
  const { token } = state;
  const loginFormik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: async (values) => {
      const login = await axios.post(baseURL + "/api/auth", values);

      dispatch({ type: "SET_TOKEN", token: login.data.token });
      //   if (login.data.token) {
      //     return <JobPosting />;
      //   }
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });

  useEffect(() => {
    console.log("token insdie use effect", token);
    dispatch({ type: "SET_TOKEN", token: "" });
    // eslint-disable-next-line
  }, [token]);

  //   console.log("inside login");
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="login-form">
          <img src="/assets/Colour.png" alt="logo" />
          {/* <h1>Welcome Back!</h1> */}
          <p>Sign in to continue</p>
          <form onSubmit={loginFormik.handleSubmit}>
            <div className="inputWrapper">
              {/* <label htmlFor="name">Username</label> */}
              <EmailIcon className="login-icon" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={loginFormik.handleChange}
                value={loginFormik.values.name}
              />
            </div>
            <div className="error">
              {loginFormik.errors.name ? (
                <small>{loginFormik.errors.name}</small>
              ) : null}
            </div>
            <div className="inputWrapper">
              {/* <label htmlFor="password">Password</label> */}
              <LockIcon className="login-icon" />
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                onChange={loginFormik.handleChange}
                value={loginFormik.values.password}
              />
            </div>
            <div className="error">
              {loginFormik.errors.password ? (
                <small>{loginFormik.errors.password}</small>
              ) : null}
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
