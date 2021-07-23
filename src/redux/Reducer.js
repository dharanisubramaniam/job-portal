export const initialState = {
  job: [],
  jobMetadata: {},
  searchResults: [],
  category: [],
  company: [],
  location: [],
  jobType: [],
  token: "",
  categoryId: null,

  currentPage: 1,
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
    case "SET_CATEGORYID":
      return {
        ...state,
        categoryId: action.categoryId,
      };

    case "SET_CURRENTPAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};
