/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactFormData = /* GraphQL */ `
  mutation CreateContactFormData(
    $input: CreateContactFormDataInput!
    $condition: ModelContactFormDataConditionInput
  ) {
    createContactFormData(input: $input, condition: $condition) {
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
export const updateContactFormData = /* GraphQL */ `
  mutation UpdateContactFormData(
    $input: UpdateContactFormDataInput!
    $condition: ModelContactFormDataConditionInput
  ) {
    updateContactFormData(input: $input, condition: $condition) {
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
export const deleteContactFormData = /* GraphQL */ `
  mutation DeleteContactFormData(
    $input: DeleteContactFormDataInput!
    $condition: ModelContactFormDataConditionInput
  ) {
    deleteContactFormData(input: $input, condition: $condition) {
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
