const baseURL = "https://flipkart-clone-front-end.herokuapp.com/";

export const api = `${baseURL}/api`;
export const generatePublicURL = (filename) => {
  return `${baseURL}/public/${filename}`;
};
