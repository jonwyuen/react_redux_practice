import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3001";

export const signup = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: "Wrong email or password" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};
