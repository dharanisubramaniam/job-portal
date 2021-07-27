export const perPage = 2;
export const localURL = "http://localhost:3000";
export const mainURL = "https://oerrors.com";
export const baseURL =
  process.env.NODE_ENV === "development" ? localURL : mainURL;
