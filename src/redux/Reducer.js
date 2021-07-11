export const initialState = {
  job: [],
  searchResults: [],
  category: [],
  company: [],
  location: [],
  jobType: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_JOB":
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
    default:
      return state;
  }
};
