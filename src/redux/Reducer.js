export const initialState = {
  job: [],
  jobMetadata: {},
  searchResults: [],
  category: [],
  company: [],
  location: [],
  jobType: [],
  token: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_JOB_DATA":
      return {
        ...state,
        job: action.job,
      };

    case "SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.searchResults,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category,
      };
    case "SET_COMPANY":
      return {
        ...state,
        company: action.company,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: action.location,
      };
    case "SET_JOBTYPE":
      return {
        ...state,
        jobType: action.jobType,
      };
    case "SET_JOB_METADATA":
      return {
        ...state,
        jobMetadata: action.jobMetadata,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
