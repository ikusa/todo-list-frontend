/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoData
// ====================================================

export interface TodoData_todoes {
  __typename: "Todo";
  id: string;
  task: string;
  done: boolean;
  dueDate: any;
}

export interface TodoData {
  todoes: TodoData_todoes[];
}
