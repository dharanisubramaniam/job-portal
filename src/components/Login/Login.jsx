import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./Login.scss";
import axios from "axios";
import { useStateValue } from "../../redux/StateProvider";

function Login() {
  const baseURL = "http://localhost:5001";

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
      console.log(login);
      dispatch({ type: "SET_TOKEN", token: login.data.token });
      //   if (login.data.token) {
      //     return <JobPosting />;
      //   }
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
      <div>
        <h1>Login To Continue</h1>
        <div>
          <form onSubmit={loginFormik.handleSubmit}>
            <div>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={loginFormik.handleChange}
                value={loginFormik.values.name}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={loginFormik.handleChange}
                value={loginFormik.values.password}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
