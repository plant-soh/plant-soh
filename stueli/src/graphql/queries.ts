/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnlage = /* GraphQL */ `
  query GetAnlage($id: ID!) {
    getAnlage(id: $id) {
      id
      firma
      standort
      anschrift
      users
      createdAt
      updatedAt
      anlagenUsers {
        items {
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            users
            createdAt
            updatedAt
            anlagenUsers {
              nextToken
            }
            referenzStueli {
              nextToken
            }
          }
          user {
            email
            role
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
          }
        }
        nextToken
      }
      referenzStueli {
        items {
          id
          anlageId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAnlages = /* GraphQL */ `
  query ListAnlages(
    $filter: ModelAnlageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnlages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firma
        standort
        anschrift
        users
        createdAt
        updatedAt
        anlagenUsers {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        referenzStueli {
          items {
            id
            anlageId
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAnlagenUser = /* GraphQL */ `
  query GetAnlagenUser($userEmail: String!, $anlageId: ID!) {
    getAnlagenUser(userEmail: $userEmail, anlageId: $anlageId) {
      anlageId
      userEmail
      createdAt
      updatedAt
      anlage {
        id
        firma
        standort
        anschrift
        users
        createdAt
        updatedAt
        anlagenUsers {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        referenzStueli {
          items {
            id
            anlageId
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      user {
        email
        role
        createdAt
        updatedAt
        anlagen {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listAnlagenUsers = /* GraphQL */ `
  query ListAnlagenUsers(
    $userEmail: String
    $anlageId: ModelIDKeyConditionInput
    $filter: ModelAnlagenUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAnlagenUsers(
      userEmail: $userEmail
      anlageId: $anlageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        anlageId
        userEmail
        createdAt
        updatedAt
        anlage {
          id
          firma
          standort
          anschrift
          users
          createdAt
          updatedAt
          anlagenUsers {
            items {
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          referenzStueli {
            items {
              id
              anlageId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        user {
          email
          role
          createdAt
          updatedAt
          anlagen {
            items {
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getReferenzStueli = /* GraphQL */ `
  query GetReferenzStueli($id: ID!) {
    getReferenzStueli(id: $id) {
      id
      anlageId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const listReferenzStuelis = /* GraphQL */ `
  query ListReferenzStuelis(
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferenzStuelis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const referenzStueliByKurzspezifikation = /* GraphQL */ `
  query ReferenzStueliByKurzspezifikation(
    $anlageId: ID
    $kurzspezifikation: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    referenzStueliByKurzspezifikation(
      anlageId: $anlageId
      kurzspezifikation: $kurzspezifikation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byAnlage = /* GraphQL */ `
  query ByAnlage(
    $anlageId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byAnlage(
      anlageId: $anlageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      role
      createdAt
      updatedAt
      anlagen {
        items {
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            users
            createdAt
            updatedAt
            anlagenUsers {
              nextToken
            }
            referenzStueli {
              nextToken
            }
          }
          user {
            email
            role
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        role
        createdAt
        updatedAt
        anlagen {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
