export const perPage = 6;
export const localURL = "http://localhost:3000";
export const mainURL = "https://www.oerrors.com";
export const baseURL =
  process.env.NODE_ENV === "development" ? localURL : mainURL;
