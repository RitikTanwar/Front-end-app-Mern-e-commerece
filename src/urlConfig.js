// export const api = "http://localhost:3000/api";
const baseURL = "https://flipkart-backened-rest-server.herokuapp.com";

export const api = `${baseURL}/api`;
export const generatePublicURL = (filename) => {
  return `${baseURL}/${filename}`;
};
