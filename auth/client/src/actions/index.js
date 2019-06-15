import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3001";

export const signup = ({ email, password }) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return dispatch({ type: AUTH_USER, payload: response.data.token });
  } catch (err) {
    return dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};
