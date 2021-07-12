import React, { useReducer } from "react";

import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import JobPosting from "./components/JobPosting/JobPosting";
import { reducer, initialState } from "./redux/Reducer";
import { StateContext } from "./redux/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token } = state;

  // console.log("inside job", state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route path="/login">{token ? <JobPosting /> : <Login />}</Route>
          {/* <Route path="/post">
            <Header />
            <JobPosting />
          </Route> */}

          <Route path="/">
            <Header />
            <div className="app">
              <MainPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
