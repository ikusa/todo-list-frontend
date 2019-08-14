/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginData
// ====================================================

export interface LoginData_login {
  __typename: "Auth";
  token: string;
}

export interface LoginData {
  login: LoginData_login;
}

export interface LoginDataVariables {
  email: string;
  password: string;
}
