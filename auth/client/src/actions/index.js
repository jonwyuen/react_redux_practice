import { AUTH_USER } from "./types";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3001";

export const signup = ({ email, password }) => async dispatch => {
  const request = await axios.post(`${API_URL}/signup`, { email, password });
  return dispatch({ type: AUTH_USER, payload: request.data });
};
