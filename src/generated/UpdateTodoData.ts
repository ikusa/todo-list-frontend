/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTodoData
// ====================================================

export interface UpdateTodoData_updateTodo {
  __typename: "Todo";
  id: string;
  task: string;
  done: boolean;
  dueDate: any;
}

export interface UpdateTodoData {
  updateTodo: UpdateTodoData_updateTodo;
}

export interface UpdateTodoDataVariables {
  id: string;
  task?: string | null;
  done?: boolean | null;
  dueDate?: string | null;
}
