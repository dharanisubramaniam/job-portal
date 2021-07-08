import React, { useEffect, createContext, useReducer, useContext } from "react";
import axios from "axios";
import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

import { reducer, initialState } from "./redux/Reducer";
import { StateContext } from "./redux/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const baseURL = "http://localhost:5001";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobres = await axios.get(baseURL + "/api/jobs");
        const _job = jobres.data;
        dispatch({ type: "SET_JOB", job: _job });

        const categoryres = await axios.get(baseURL + "/api/category");
        const _category = categoryres.data;
        dispatch({ type: "SET_CATEGORY", category: _category });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log("inside job", state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
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
