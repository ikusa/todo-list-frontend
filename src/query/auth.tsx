import gql from 'graphql-tag';

export let loginQuery = gql`
  mutation LoginData($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
