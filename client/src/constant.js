import Cookies from "js-cookie";

export const BACKEND_URL = "http://localhost:5000";
export const USERS_URL = "/api/users";
export const BASE_URL = "http://localhost:5000";

const getJwtToken = () => {
  return Cookies.get("jwt"); // Replace 'jwt_token' with the name of your cookie
};

// Example usage
const jwtToken = getJwtToken();
console.log(jwtToken); // Print
