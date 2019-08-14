import gql from 'graphql-tag';

export let createTodoQuery = gql`
  mutation CreateTodoData($task: String!, $dueDate: String!) {
    createTodo(task: $task, dueDate: $dueDate) {
      id
      task
      done
    }
  }
`;
