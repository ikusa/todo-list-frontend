/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodoData
// ====================================================

export interface CreateTodoData_createTodo {
  __typename: "Todo";
  id: string;
  task: string;
  done: boolean;
  dueDate: any;
}

export interface CreateTodoData {
  createTodo: CreateTodoData_createTodo;
}

export interface CreateTodoDataVariables {
  task: string;
  dueDate: string;
}
