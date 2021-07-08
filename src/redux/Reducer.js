export const initialState = {
  job: [],
  searchResults: [],
  category: [],
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
    default:
      return state;
  }
};
