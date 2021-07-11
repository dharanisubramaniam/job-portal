import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import JobPosting from "./components/JobPosting/JobPosting";
import { reducer, initialState } from "./redux/Reducer";
import { StateContext } from "./redux/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const baseURL = "http://localhost:5001";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobres = await axios.get(baseURL + "/api/jobs", { headers : { pageNumber: 1, perPage: 2 } });
        const _job = jobres.data.data;
        dispatch({ type: "SET_JOB_DATA", job: _job });
        dispatch({ type: "SET_JOB_METADATA", jobMetadata: jobres.data.metaData });

        const categoryres = await axios.get(baseURL + "/api/category");
        const _category = categoryres.data;
        dispatch({ type: "SET_CATEGORY", category: _category });

        const companyres = await axios.get(baseURL + "/api/company");
        const _company = companyres.data;
        dispatch({ type: "SET_COMPANY", company: _company });

        const jobtyperes = await axios.get(baseURL + "/api/jobType");
        const _jobType = jobtyperes.data;
        dispatch({ type: "SET_JOBTYPE", jobType: _jobType });

        const locationres = await axios.get(baseURL + "/api/location");
        const _loation = locationres.data;
        dispatch({ type: "SET_LOCATION", location: _loation });
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
          <Route path="/post">
            <Header />
            <JobPosting />
          </Route>
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
