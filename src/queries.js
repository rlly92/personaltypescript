/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactFormData = /* GraphQL */ `
  query GetContactFormData($id: ID!) {
    getContactFormData(id: $id) {
      id
      name
      email
      phoneNumber
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactFormData = /* GraphQL */ `
  query ListContactFormData(
    $filter: ModelContactFormDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactFormData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phoneNumber
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
