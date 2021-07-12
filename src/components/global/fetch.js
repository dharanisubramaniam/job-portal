import axios from "axios";

export const fetchData = async (doAuthCheck, state, dispatch) => {
  const baseURL = "http://localhost:5001";

  const { token } = state;

  //   console.log("inside fetch data count: ", count++);
  try {
    let headers = {
      pageNumber: 1,
      perPage: 2,
    };
    let authHeader = {
      "x-auth-token": token,
      doAuthCheck,
    };
    if (doAuthCheck) {
      headers = {
        ...headers,
        ...authHeader,
      };
    }
    /* console.log(
      "inside fetch data token and doAuthCheck: ",
      token,
      doAuthCheck
    ); */
    const jobres = await axios.get(baseURL + "/api/jobs", {
      headers,
    });
    const _job = jobres.data.data;
    dispatch({ type: "SET_JOB_DATA", job: _job });
    dispatch({
      type: "SET_JOB_METADATA",
      jobMetadata: jobres.data.metaData,
    });

    if (doAuthCheck) {
      const categoryres = await axios.get(baseURL + "/api/category", {
        headers: authHeader,
      });
      //console.log(categoryres);
      const _category = categoryres.data;
      dispatch({ type: "SET_CATEGORY", category: _category });

      const companyres = await axios.get(baseURL + "/api/company", {
        headers: authHeader,
      });
      const _company = companyres.data;
      dispatch({ type: "SET_COMPANY", company: _company });

      const jobtyperes = await axios.get(baseURL + "/api/jobType", {
        headers: authHeader,
      });
      const _jobType = jobtyperes.data;
      dispatch({ type: "SET_JOBTYPE", jobType: _jobType });

      const locationres = await axios.get(baseURL + "/api/location", {
        headers: authHeader,
      });
      const _loation = locationres.data;
      dispatch({ type: "SET_LOCATION", location: _loation });
    } else {
      const categoryres = await axios.get(baseURL + "/api/category");
      //console.log(categoryres);
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
    }
  } catch (error) {
    console.log(error);
  }
};
