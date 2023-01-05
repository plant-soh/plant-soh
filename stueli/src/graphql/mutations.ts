/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnlagenUserPrimary = /* GraphQL */ `
  mutation CreateAnlagenUserPrimary($input: CreateAnlagenUserPrimaryInput!) {
    createAnlagenUserPrimary(input: $input) {
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
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
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
export const deleteAnlagenUserPrimary = /* GraphQL */ `
  mutation DeleteAnlagenUserPrimary($input: DeleteAnlagenUserPrimaryInput!) {
    deleteAnlagenUserPrimary(input: $input) {
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
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
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
export const deleteAnlagePrimary = /* GraphQL */ `
  mutation DeleteAnlagePrimary($input: DeleteAnlagePrimaryInput!) {
    deleteAnlagePrimary(input: $input) {
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
            projekte {
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
      projekte {
        items {
          id
          anlageId
          projektNummer
          users
          createdAt
          updatedAt
          anlagen {
            items {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          projektStueli {
            items {
              id
              projektId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              voschlagKurzspezifikation
              vorschlagLieferant
              vorschlagNennweite
              vorschlagFeinspezifikation
              createdAt
              updatedAt
            }
            nextToken
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
export const updateAnlagenUser = /* GraphQL */ `
  mutation UpdateAnlagenUser($input: UpdateAnlagenUserInput!) {
    updateAnlagenUser(input: $input) {
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
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
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
export const createAnlage = /* GraphQL */ `
  mutation CreateAnlage($input: CreateAnlageInput!) {
    createAnlage(input: $input) {
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
            projekte {
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
      projekte {
        items {
          id
          anlageId
          projektNummer
          users
          createdAt
          updatedAt
          anlagen {
            items {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          projektStueli {
            items {
              id
              projektId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              voschlagKurzspezifikation
              vorschlagLieferant
              vorschlagNennweite
              vorschlagFeinspezifikation
              createdAt
              updatedAt
            }
            nextToken
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
export const updateAnlage = /* GraphQL */ `
  mutation UpdateAnlage($input: UpdateAnlageInput!) {
    updateAnlage(input: $input) {
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
            projekte {
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
      projekte {
        items {
          id
          anlageId
          projektNummer
          users
          createdAt
          updatedAt
          anlagen {
            items {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          projektStueli {
            items {
              id
              projektId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              voschlagKurzspezifikation
              vorschlagLieferant
              vorschlagNennweite
              vorschlagFeinspezifikation
              createdAt
              updatedAt
            }
            nextToken
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
export const deleteAnlage = /* GraphQL */ `
  mutation DeleteAnlage($input: DeleteAnlageInput!) {
    deleteAnlage(input: $input) {
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
            projekte {
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
      projekte {
        items {
          id
          anlageId
          projektNummer
          users
          createdAt
          updatedAt
          anlagen {
            items {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          projektStueli {
            items {
              id
              projektId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              voschlagKurzspezifikation
              vorschlagLieferant
              vorschlagNennweite
              vorschlagFeinspezifikation
              createdAt
              updatedAt
            }
            nextToken
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
export const createAnlagenUser = /* GraphQL */ `
  mutation CreateAnlagenUser($input: CreateAnlagenUserInput!) {
    createAnlagenUser(input: $input) {
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
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
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
export const deleteAnlagenUser = /* GraphQL */ `
  mutation DeleteAnlagenUser($input: DeleteAnlagenUserInput!) {
    deleteAnlagenUser(input: $input) {
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
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
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
export const createProjekt = /* GraphQL */ `
  mutation CreateProjekt($input: CreateProjektInput!) {
    createProjekt(input: $input) {
      id
      anlageId
      projektNummer
      users
      createdAt
      updatedAt
      anlagen {
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
            }
            nextToken
          }
          projekte {
            items {
              id
              anlageId
              projektNummer
              users
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
        nextToken
      }
      projektStueli {
        items {
          id
          projektId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          voschlagKurzspezifikation
          vorschlagLieferant
          vorschlagNennweite
          vorschlagFeinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateProjekt = /* GraphQL */ `
  mutation UpdateProjekt($input: UpdateProjektInput!) {
    updateProjekt(input: $input) {
      id
      anlageId
      projektNummer
      users
      createdAt
      updatedAt
      anlagen {
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
            }
            nextToken
          }
          projekte {
            items {
              id
              anlageId
              projektNummer
              users
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
        nextToken
      }
      projektStueli {
        items {
          id
          projektId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          voschlagKurzspezifikation
          vorschlagLieferant
          vorschlagNennweite
          vorschlagFeinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteProjekt = /* GraphQL */ `
  mutation DeleteProjekt($input: DeleteProjektInput!) {
    deleteProjekt(input: $input) {
      id
      anlageId
      projektNummer
      users
      createdAt
      updatedAt
      anlagen {
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
            }
            nextToken
          }
          projekte {
            items {
              id
              anlageId
              projektNummer
              users
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
        nextToken
      }
      projektStueli {
        items {
          id
          projektId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          voschlagKurzspezifikation
          vorschlagLieferant
          vorschlagNennweite
          vorschlagFeinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createProjektStueli = /* GraphQL */ `
  mutation CreateProjektStueli($input: CreateProjektStueliInput!) {
    createProjektStueli(input: $input) {
      id
      projektId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      voschlagKurzspezifikation
      vorschlagLieferant
      vorschlagNennweite
      vorschlagFeinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const updateProjektStueli = /* GraphQL */ `
  mutation UpdateProjektStueli($input: UpdateProjektStueliInput!) {
    updateProjektStueli(input: $input) {
      id
      projektId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      voschlagKurzspezifikation
      vorschlagLieferant
      vorschlagNennweite
      vorschlagFeinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjektStueli = /* GraphQL */ `
  mutation DeleteProjektStueli($input: DeleteProjektStueliInput!) {
    deleteProjektStueli(input: $input) {
      id
      projektId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      voschlagKurzspezifikation
      vorschlagLieferant
      vorschlagNennweite
      vorschlagFeinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const createReferenzStueli = /* GraphQL */ `
  mutation CreateReferenzStueli($input: CreateReferenzStueliInput!) {
    createReferenzStueli(input: $input) {
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
export const updateReferenzStueli = /* GraphQL */ `
  mutation UpdateReferenzStueli($input: UpdateReferenzStueliInput!) {
    updateReferenzStueli(input: $input) {
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
export const deleteReferenzStueli = /* GraphQL */ `
  mutation DeleteReferenzStueli($input: DeleteReferenzStueliInput!) {
    deleteReferenzStueli(input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
            projekte {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
            projekte {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
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
            projekte {
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
