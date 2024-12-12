const BASE_URL = process.env.REACT_APP_DOMAIN;

const REGISTER = BASE_URL+"/register";
const LOGIN = BASE_URL+"/login";
const GET_USERS = BASE_URL+"/all_users";
const DELETE_USER = BASE_URL + "/delete_user/";
const EDIT_USER = BASE_URL + "/edit_user/";
const ADD_USER = BASE_URL + "/register";

export {REGISTER, LOGIN, GET_USERS, DELETE_USER, EDIT_USER, ADD_USER};