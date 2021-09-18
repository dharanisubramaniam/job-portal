import React, { useReducer } from "react";
import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import JobPosting from "./components/JobPosting/JobPosting";
import { reducer, initialState } from "./redux/Reducer";
import { StateContext } from "./redux/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import Website from "./components/Website/Website";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token, job } = state;

  // console.log("environment : ", process.env.NODE_ENV);
  const loadingSpinnerCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  `;
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router basename="/jobs">
        <Switch>
          <Route path="/login">{token ? <JobPosting /> : <Login />}</Route>

          <Route path="/:id">
            <Header />
            <div className="app">
              <MainPage />
            </div>
            <Footer />
          </Route>

          <Route path="/creativejobs">
            <Header />

            <div className="app">
              <MainPage />
            </div>
            {job.length === 0 ? (
              <BeatLoader
                color="#3932d8"
                loading="true"
                size={10}
                css={loadingSpinnerCSS}
              />
            ) : (
              ""
            )}
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Website />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
