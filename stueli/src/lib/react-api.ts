import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { amplifyFetcher } from '../lib/fetcher';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
  BigInt: any;
  Double: any;
};

export type Anlage = {
  __typename?: 'Anlage';
  anlagenUsers?: Maybe<ModelAnlagenUserConnection>;
  anschrift?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  firma: Scalars['String'];
  id: Scalars['ID'];
  referenzStueli?: Maybe<ModelReferenzStueliConnection>;
  standort: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  users?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AnlageAnlagenUsersArgs = {
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userEmail?: InputMaybe<ModelStringKeyConditionInput>;
};

export type AnlageReferenzStueliArgs = {
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type AnlagenUser = {
  __typename?: 'AnlagenUser';
  anlage: Anlage;
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
  user: User;
  userEmail: Scalars['String'];
};

export type CreateAnlageInput = {
  anschrift?: InputMaybe<Scalars['String']>;
  firma: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  standort: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type CreateReferenzStueliInput = {
  anlageId: Scalars['ID'];
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  role: Role;
};

export type DeleteAnlageInput = {
  anlageId: Scalars['ID'];
};

export type DeleteAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type DeleteReferenzStueliInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  email: Scalars['String'];
};

export type ModelAnlageConnection = {
  __typename?: 'ModelAnlageConnection';
  items?: Maybe<Array<Maybe<Anlage>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnlageFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAnlageFilterInput>>>;
  anschrift?: InputMaybe<ModelStringFilterInput>;
  firma?: InputMaybe<ModelStringFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelAnlageFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnlageFilterInput>>>;
  standort?: InputMaybe<ModelStringFilterInput>;
  users?: InputMaybe<ModelStringFilterInput>;
};

export type ModelAnlagenUserConnection = {
  __typename?: 'ModelAnlagenUserConnection';
  items?: Maybe<Array<Maybe<AnlagenUser>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnlagenUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAnlagenUserFilterInput>>>;
  anlageId?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelAnlagenUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnlagenUserFilterInput>>>;
  userEmail?: InputMaybe<ModelStringFilterInput>;
};

export type ModelBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelReferenzStueliConnection = {
  __typename?: 'ModelReferenzStueliConnection';
  items?: Maybe<Array<Maybe<ReferenzStueli>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelReferenzStueliFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelReferenzStueliFilterInput>>>;
  anlageId?: InputMaybe<ModelIdFilterInput>;
  feinspezifikation?: InputMaybe<ModelStringFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  kurzspezifikation?: InputMaybe<ModelStringFilterInput>;
  lieferant?: InputMaybe<ModelStringFilterInput>;
  nennweite?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelReferenzStueliFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelReferenzStueliFilterInput>>>;
};

export type ModelRoleFilterInput = {
  eq?: InputMaybe<Role>;
  ne?: InputMaybe<Role>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ModelStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type ModelStringKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  email?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  role?: InputMaybe<ModelRoleFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnlage?: Maybe<Anlage>;
  createAnlagenUser?: Maybe<AnlagenUser>;
  createAnlagenUserPrimary?: Maybe<AnlagenUser>;
  createReferenzStueli?: Maybe<ReferenzStueli>;
  createUser?: Maybe<User>;
  deleteAnlage?: Maybe<Anlage>;
  deleteAnlagePrimary?: Maybe<Anlage>;
  deleteAnlagenUser?: Maybe<AnlagenUser>;
  deleteAnlagenUserPrimary?: Maybe<AnlagenUser>;
  deleteReferenzStueli?: Maybe<ReferenzStueli>;
  deleteUser?: Maybe<User>;
  updateAnlage?: Maybe<Anlage>;
  updateAnlagenUser?: Maybe<AnlagenUser>;
  updateReferenzStueli?: Maybe<ReferenzStueli>;
  updateUser?: Maybe<User>;
};

export type MutationCreateAnlageArgs = {
  input: CreateAnlageInput;
};

export type MutationCreateAnlagenUserArgs = {
  input: CreateAnlagenUserInput;
};

export type MutationCreateAnlagenUserPrimaryArgs = {
  input: CreateAnlagenUserInput;
};

export type MutationCreateReferenzStueliArgs = {
  input: CreateReferenzStueliInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteAnlageArgs = {
  input: DeleteAnlageInput;
};

export type MutationDeleteAnlagePrimaryArgs = {
  input: DeleteAnlageInput;
};

export type MutationDeleteAnlagenUserArgs = {
  input: DeleteAnlagenUserInput;
};

export type MutationDeleteAnlagenUserPrimaryArgs = {
  input: DeleteAnlagenUserInput;
};

export type MutationDeleteReferenzStueliArgs = {
  input: DeleteReferenzStueliInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationUpdateAnlageArgs = {
  input: UpdateAnlageInput;
};

export type MutationUpdateAnlagenUserArgs = {
  input: UpdateAnlagenUserInput;
};

export type MutationUpdateReferenzStueliArgs = {
  input: UpdateReferenzStueliInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAnlage?: Maybe<Anlage>;
  getAnlagenUser?: Maybe<AnlagenUser>;
  getReferenzStueli?: Maybe<ReferenzStueli>;
  getUser?: Maybe<User>;
  listAnlagenUsers?: Maybe<ModelAnlagenUserConnection>;
  listAnlages?: Maybe<ModelAnlageConnection>;
  listReferenzStuelis?: Maybe<ModelReferenzStueliConnection>;
  listUsers?: Maybe<ModelUserConnection>;
};

export type QueryGetAnlageArgs = {
  id: Scalars['ID'];
};

export type QueryGetAnlagenUserArgs = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type QueryGetReferenzStueliArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserArgs = {
  email: Scalars['String'];
};

export type QueryListAnlagenUsersArgs = {
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userEmail?: InputMaybe<Scalars['String']>;
};

export type QueryListAnlagesArgs = {
  filter?: InputMaybe<ModelAnlageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListReferenzStuelisArgs = {
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ReferenzStueli = {
  __typename?: 'ReferenzStueli';
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  feinspezifikation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  kurzspezifikation?: Maybe<Scalars['String']>;
  lieferant?: Maybe<Scalars['String']>;
  nennweite?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export enum Role {
  Admin = 'Admin',
  Anlagenbauer = 'Anlagenbauer',
  Anlagenbetreiber = 'Anlagenbetreiber',
}

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAnlage?: Maybe<Anlage>;
  onCreateAnlagenUser?: Maybe<AnlagenUser>;
  onCreateReferenzStueli?: Maybe<ReferenzStueli>;
  onCreateUser?: Maybe<User>;
  onDeleteAnlage?: Maybe<Anlage>;
  onDeleteAnlagenUser?: Maybe<AnlagenUser>;
  onDeleteReferenzStueli?: Maybe<ReferenzStueli>;
  onDeleteUser?: Maybe<User>;
  onUpdateAnlage?: Maybe<Anlage>;
  onUpdateAnlagenUser?: Maybe<AnlagenUser>;
  onUpdateReferenzStueli?: Maybe<ReferenzStueli>;
  onUpdateUser?: Maybe<User>;
};

export type SubscriptionOnCreateAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type UpdateAnlageInput = {
  anschrift?: InputMaybe<Scalars['String']>;
  firma?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  standort?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type UpdateReferenzStueliInput = {
  anlageId?: InputMaybe<Scalars['ID']>;
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type User = {
  __typename?: 'User';
  anlagen?: Maybe<ModelAnlagenUserConnection>;
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  role: Role;
  updatedAt: Scalars['AWSDateTime'];
};

export type UserAnlagenArgs = {
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type CreateAnlagenUserPrimaryMutationVariables = Exact<{
  input: CreateAnlagenUserInput;
}>;

export type CreateAnlagenUserPrimaryMutation = {
  __typename?: 'Mutation';
  createAnlagenUserPrimary?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagenUserPrimaryMutationVariables = Exact<{
  input: DeleteAnlagenUserInput;
}>;

export type DeleteAnlagenUserPrimaryMutation = {
  __typename?: 'Mutation';
  deleteAnlagenUserPrimary?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagePrimaryMutationVariables = Exact<{
  input: DeleteAnlageInput;
}>;

export type DeleteAnlagePrimaryMutation = {
  __typename?: 'Mutation';
  deleteAnlagePrimary?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateAnlagenUserMutationVariables = Exact<{
  input: UpdateAnlagenUserInput;
}>;

export type UpdateAnlagenUserMutation = {
  __typename?: 'Mutation';
  updateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type CreateAnlageMutationVariables = Exact<{
  input: CreateAnlageInput;
}>;

export type CreateAnlageMutation = {
  __typename?: 'Mutation';
  createAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateAnlageMutationVariables = Exact<{
  input: UpdateAnlageInput;
}>;

export type UpdateAnlageMutation = {
  __typename?: 'Mutation';
  updateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DeleteAnlageMutationVariables = Exact<{
  input: DeleteAnlageInput;
}>;

export type DeleteAnlageMutation = {
  __typename?: 'Mutation';
  deleteAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type CreateAnlagenUserMutationVariables = Exact<{
  input: CreateAnlagenUserInput;
}>;

export type CreateAnlagenUserMutation = {
  __typename?: 'Mutation';
  createAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagenUserMutationVariables = Exact<{
  input: DeleteAnlagenUserInput;
}>;

export type DeleteAnlagenUserMutation = {
  __typename?: 'Mutation';
  deleteAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type CreateReferenzStueliMutationVariables = Exact<{
  input: CreateReferenzStueliInput;
}>;

export type CreateReferenzStueliMutation = {
  __typename?: 'Mutation';
  createReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type UpdateReferenzStueliMutationVariables = Exact<{
  input: UpdateReferenzStueliInput;
}>;

export type UpdateReferenzStueliMutation = {
  __typename?: 'Mutation';
  updateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type DeleteReferenzStueliMutationVariables = Exact<{
  input: DeleteReferenzStueliInput;
}>;

export type DeleteReferenzStueliMutation = {
  __typename?: 'Mutation';
  deleteReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetAnlageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetAnlageQuery = {
  __typename?: 'Query';
  getAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListAnlagesQueryVariables = Exact<{
  filter?: InputMaybe<ModelAnlageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListAnlagesQuery = {
  __typename?: 'Query';
  listAnlages?:
    | {
        __typename?: 'ModelAnlageConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'Anlage';
                  id: string;
                  firma: string;
                  standort: string;
                  anschrift?: string | null | undefined;
                  users?: Array<string | null | undefined> | null | undefined;
                  createdAt: any;
                  updatedAt: any;
                  anlagenUsers?:
                    | {
                        __typename?: 'ModelAnlagenUserConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'AnlagenUser';
                                  anlageId: string;
                                  userEmail: string;
                                  createdAt: any;
                                  updatedAt: any;
                                  anlage: {
                                    __typename?: 'Anlage';
                                    id: string;
                                    firma: string;
                                    standort: string;
                                    anschrift?: string | null | undefined;
                                    users?:
                                      | Array<string | null | undefined>
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  referenzStueli?:
                    | {
                        __typename?: 'ModelReferenzStueliConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'ReferenzStueli';
                                  id: string;
                                  anlageId: string;
                                  kurzspezifikation?: string | null | undefined;
                                  lieferant?: string | null | undefined;
                                  nennweite?: string | null | undefined;
                                  feinspezifikation?: string | null | undefined;
                                  createdAt: any;
                                  updatedAt: any;
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetAnlagenUserQueryVariables = Exact<{
  userEmail: Scalars['String'];
  anlageId: Scalars['ID'];
}>;

export type GetAnlagenUserQuery = {
  __typename?: 'Query';
  getAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type ListAnlagenUsersQueryVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListAnlagenUsersQuery = {
  __typename?: 'Query';
  listAnlagenUsers?:
    | {
        __typename?: 'ModelAnlagenUserConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'AnlagenUser';
                  anlageId: string;
                  userEmail: string;
                  createdAt: any;
                  updatedAt: any;
                  anlage: {
                    __typename?: 'Anlage';
                    id: string;
                    firma: string;
                    standort: string;
                    anschrift?: string | null | undefined;
                    users?: Array<string | null | undefined> | null | undefined;
                    createdAt: any;
                    updatedAt: any;
                    anlagenUsers?:
                      | {
                          __typename?: 'ModelAnlagenUserConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'AnlagenUser';
                                    anlageId: string;
                                    userEmail: string;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                    referenzStueli?:
                      | {
                          __typename?: 'ModelReferenzStueliConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'ReferenzStueli';
                                    id: string;
                                    anlageId: string;
                                    kurzspezifikation?:
                                      | string
                                      | null
                                      | undefined;
                                    lieferant?: string | null | undefined;
                                    nennweite?: string | null | undefined;
                                    feinspezifikation?:
                                      | string
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  };
                  user: {
                    __typename?: 'User';
                    email: string;
                    role: Role;
                    createdAt: any;
                    updatedAt: any;
                    anlagen?:
                      | {
                          __typename?: 'ModelAnlagenUserConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'AnlagenUser';
                                    anlageId: string;
                                    userEmail: string;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  };
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetReferenzStueliQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetReferenzStueliQuery = {
  __typename?: 'Query';
  getReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type ListReferenzStuelisQueryVariables = Exact<{
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListReferenzStuelisQuery = {
  __typename?: 'Query';
  listReferenzStuelis?:
    | {
        __typename?: 'ModelReferenzStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ReferenzStueli';
                  id: string;
                  anlageId: string;
                  kurzspezifikation?: string | null | undefined;
                  lieferant?: string | null | undefined;
                  nennweite?: string | null | undefined;
                  feinspezifikation?: string | null | undefined;
                  createdAt: any;
                  updatedAt: any;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListUsersQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListUsersQuery = {
  __typename?: 'Query';
  listUsers?:
    | {
        __typename?: 'ModelUserConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'User';
                  email: string;
                  role: Role;
                  createdAt: any;
                  updatedAt: any;
                  anlagen?:
                    | {
                        __typename?: 'ModelAnlagenUserConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'AnlagenUser';
                                  anlageId: string;
                                  userEmail: string;
                                  createdAt: any;
                                  updatedAt: any;
                                  anlage: {
                                    __typename?: 'Anlage';
                                    id: string;
                                    firma: string;
                                    standort: string;
                                    anschrift?: string | null | undefined;
                                    users?:
                                      | Array<string | null | undefined>
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnCreateAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateAnlageSubscription = {
  __typename?: 'Subscription';
  onCreateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnUpdateAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateAnlageSubscription = {
  __typename?: 'Subscription';
  onUpdateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnDeleteAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteAnlageSubscription = {
  __typename?: 'Subscription';
  onDeleteAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        id: string;
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnCreateAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onCreateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnUpdateAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onUpdateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnDeleteAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onDeleteAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnCreateReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnCreateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onCreateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnUpdateReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnUpdateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onUpdateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnDeleteReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnDeleteReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onDeleteReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnCreateUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateUserSubscription = {
  __typename?: 'Subscription';
  onCreateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnUpdateUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateUserSubscription = {
  __typename?: 'Subscription';
  onUpdateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnDeleteUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteUserSubscription = {
  __typename?: 'Subscription';
  onDeleteUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const CreateAnlagenUserPrimaryDocument = `
    mutation CreateAnlagenUserPrimary($input: CreateAnlagenUserInput!) {
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
export const useCreateAnlagenUserPrimaryMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateAnlagenUserPrimaryMutation,
    TError,
    CreateAnlagenUserPrimaryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateAnlagenUserPrimaryMutation,
    TError,
    CreateAnlagenUserPrimaryMutationVariables,
    TContext
  >(
    ['CreateAnlagenUserPrimary'],
    (variables?: CreateAnlagenUserPrimaryMutationVariables) =>
      amplifyFetcher<
        CreateAnlagenUserPrimaryMutation,
        CreateAnlagenUserPrimaryMutationVariables
      >(CreateAnlagenUserPrimaryDocument, variables)(),
    options,
  );
export const DeleteAnlagenUserPrimaryDocument = `
    mutation DeleteAnlagenUserPrimary($input: DeleteAnlagenUserInput!) {
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
export const useDeleteAnlagenUserPrimaryMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteAnlagenUserPrimaryMutation,
    TError,
    DeleteAnlagenUserPrimaryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlagenUserPrimaryMutation,
    TError,
    DeleteAnlagenUserPrimaryMutationVariables,
    TContext
  >(
    ['DeleteAnlagenUserPrimary'],
    (variables?: DeleteAnlagenUserPrimaryMutationVariables) =>
      amplifyFetcher<
        DeleteAnlagenUserPrimaryMutation,
        DeleteAnlagenUserPrimaryMutationVariables
      >(DeleteAnlagenUserPrimaryDocument, variables)(),
    options,
  );
export const DeleteAnlagePrimaryDocument = `
    mutation DeleteAnlagePrimary($input: DeleteAnlageInput!) {
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
export const useDeleteAnlagePrimaryMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteAnlagePrimaryMutation,
    TError,
    DeleteAnlagePrimaryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlagePrimaryMutation,
    TError,
    DeleteAnlagePrimaryMutationVariables,
    TContext
  >(
    ['DeleteAnlagePrimary'],
    (variables?: DeleteAnlagePrimaryMutationVariables) =>
      amplifyFetcher<
        DeleteAnlagePrimaryMutation,
        DeleteAnlagePrimaryMutationVariables
      >(DeleteAnlagePrimaryDocument, variables)(),
    options,
  );
export const UpdateAnlagenUserDocument = `
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
export const useUpdateAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    UpdateAnlagenUserMutation,
    TError,
    UpdateAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateAnlagenUserMutation,
    TError,
    UpdateAnlagenUserMutationVariables,
    TContext
  >(
    ['UpdateAnlagenUser'],
    (variables?: UpdateAnlagenUserMutationVariables) =>
      amplifyFetcher<
        UpdateAnlagenUserMutation,
        UpdateAnlagenUserMutationVariables
      >(UpdateAnlagenUserDocument, variables)(),
    options,
  );
export const CreateAnlageDocument = `
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
export const useCreateAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateAnlageMutation,
    TError,
    CreateAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateAnlageMutation,
    TError,
    CreateAnlageMutationVariables,
    TContext
  >(
    ['CreateAnlage'],
    (variables?: CreateAnlageMutationVariables) =>
      amplifyFetcher<CreateAnlageMutation, CreateAnlageMutationVariables>(
        CreateAnlageDocument,
        variables,
      )(),
    options,
  );
export const UpdateAnlageDocument = `
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
export const useUpdateAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateAnlageMutation,
    TError,
    UpdateAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateAnlageMutation,
    TError,
    UpdateAnlageMutationVariables,
    TContext
  >(
    ['UpdateAnlage'],
    (variables?: UpdateAnlageMutationVariables) =>
      amplifyFetcher<UpdateAnlageMutation, UpdateAnlageMutationVariables>(
        UpdateAnlageDocument,
        variables,
      )(),
    options,
  );
export const DeleteAnlageDocument = `
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
export const useDeleteAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteAnlageMutation,
    TError,
    DeleteAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlageMutation,
    TError,
    DeleteAnlageMutationVariables,
    TContext
  >(
    ['DeleteAnlage'],
    (variables?: DeleteAnlageMutationVariables) =>
      amplifyFetcher<DeleteAnlageMutation, DeleteAnlageMutationVariables>(
        DeleteAnlageDocument,
        variables,
      )(),
    options,
  );
export const CreateAnlagenUserDocument = `
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
export const useCreateAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateAnlagenUserMutation,
    TError,
    CreateAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateAnlagenUserMutation,
    TError,
    CreateAnlagenUserMutationVariables,
    TContext
  >(
    ['CreateAnlagenUser'],
    (variables?: CreateAnlagenUserMutationVariables) =>
      amplifyFetcher<
        CreateAnlagenUserMutation,
        CreateAnlagenUserMutationVariables
      >(CreateAnlagenUserDocument, variables)(),
    options,
  );
export const DeleteAnlagenUserDocument = `
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
export const useDeleteAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteAnlagenUserMutation,
    TError,
    DeleteAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlagenUserMutation,
    TError,
    DeleteAnlagenUserMutationVariables,
    TContext
  >(
    ['DeleteAnlagenUser'],
    (variables?: DeleteAnlagenUserMutationVariables) =>
      amplifyFetcher<
        DeleteAnlagenUserMutation,
        DeleteAnlagenUserMutationVariables
      >(DeleteAnlagenUserDocument, variables)(),
    options,
  );
export const CreateReferenzStueliDocument = `
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
export const useCreateReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateReferenzStueliMutation,
    TError,
    CreateReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateReferenzStueliMutation,
    TError,
    CreateReferenzStueliMutationVariables,
    TContext
  >(
    ['CreateReferenzStueli'],
    (variables?: CreateReferenzStueliMutationVariables) =>
      amplifyFetcher<
        CreateReferenzStueliMutation,
        CreateReferenzStueliMutationVariables
      >(CreateReferenzStueliDocument, variables)(),
    options,
  );
export const UpdateReferenzStueliDocument = `
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
export const useUpdateReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    UpdateReferenzStueliMutation,
    TError,
    UpdateReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateReferenzStueliMutation,
    TError,
    UpdateReferenzStueliMutationVariables,
    TContext
  >(
    ['UpdateReferenzStueli'],
    (variables?: UpdateReferenzStueliMutationVariables) =>
      amplifyFetcher<
        UpdateReferenzStueliMutation,
        UpdateReferenzStueliMutationVariables
      >(UpdateReferenzStueliDocument, variables)(),
    options,
  );
export const DeleteReferenzStueliDocument = `
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
export const useDeleteReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteReferenzStueliMutation,
    TError,
    DeleteReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteReferenzStueliMutation,
    TError,
    DeleteReferenzStueliMutationVariables,
    TContext
  >(
    ['DeleteReferenzStueli'],
    (variables?: DeleteReferenzStueliMutationVariables) =>
      amplifyFetcher<
        DeleteReferenzStueliMutation,
        DeleteReferenzStueliMutationVariables
      >(DeleteReferenzStueliDocument, variables)(),
    options,
  );
export const CreateUserDocument = `
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
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >(
    ['CreateUser'],
    (variables?: CreateUserMutationVariables) =>
      amplifyFetcher<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables,
      )(),
    options,
  );
export const UpdateUserDocument = `
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
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    ['UpdateUser'],
    (variables?: UpdateUserMutationVariables) =>
      amplifyFetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables,
      )(),
    options,
  );
export const DeleteUserDocument = `
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
export const useDeleteUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >(
    ['DeleteUser'],
    (variables?: DeleteUserMutationVariables) =>
      amplifyFetcher<DeleteUserMutation, DeleteUserMutationVariables>(
        DeleteUserDocument,
        variables,
      )(),
    options,
  );
export const GetAnlageDocument = `
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
export const useGetAnlageQuery = <TData = GetAnlageQuery, TError = unknown>(
  variables: GetAnlageQueryVariables,
  options?: UseQueryOptions<GetAnlageQuery, TError, TData>,
) =>
  useQuery<GetAnlageQuery, TError, TData>(
    ['GetAnlage', variables],
    amplifyFetcher<GetAnlageQuery, GetAnlageQueryVariables>(
      GetAnlageDocument,
      variables,
    ),
    options,
  );
export const ListAnlagesDocument = `
    query ListAnlages($filter: ModelAnlageFilterInput, $limit: Int, $nextToken: String) {
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
export const useListAnlagesQuery = <TData = ListAnlagesQuery, TError = unknown>(
  variables?: ListAnlagesQueryVariables,
  options?: UseQueryOptions<ListAnlagesQuery, TError, TData>,
) =>
  useQuery<ListAnlagesQuery, TError, TData>(
    variables === undefined ? ['ListAnlages'] : ['ListAnlages', variables],
    amplifyFetcher<ListAnlagesQuery, ListAnlagesQueryVariables>(
      ListAnlagesDocument,
      variables,
    ),
    options,
  );
export const GetAnlagenUserDocument = `
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
export const useGetAnlagenUserQuery = <
  TData = GetAnlagenUserQuery,
  TError = unknown,
>(
  variables: GetAnlagenUserQueryVariables,
  options?: UseQueryOptions<GetAnlagenUserQuery, TError, TData>,
) =>
  useQuery<GetAnlagenUserQuery, TError, TData>(
    ['GetAnlagenUser', variables],
    amplifyFetcher<GetAnlagenUserQuery, GetAnlagenUserQueryVariables>(
      GetAnlagenUserDocument,
      variables,
    ),
    options,
  );
export const ListAnlagenUsersDocument = `
    query ListAnlagenUsers($userEmail: String, $anlageId: ModelIDKeyConditionInput, $filter: ModelAnlagenUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListAnlagenUsersQuery = <
  TData = ListAnlagenUsersQuery,
  TError = unknown,
>(
  variables?: ListAnlagenUsersQueryVariables,
  options?: UseQueryOptions<ListAnlagenUsersQuery, TError, TData>,
) =>
  useQuery<ListAnlagenUsersQuery, TError, TData>(
    variables === undefined
      ? ['ListAnlagenUsers']
      : ['ListAnlagenUsers', variables],
    amplifyFetcher<ListAnlagenUsersQuery, ListAnlagenUsersQueryVariables>(
      ListAnlagenUsersDocument,
      variables,
    ),
    options,
  );
export const GetReferenzStueliDocument = `
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
export const useGetReferenzStueliQuery = <
  TData = GetReferenzStueliQuery,
  TError = unknown,
>(
  variables: GetReferenzStueliQueryVariables,
  options?: UseQueryOptions<GetReferenzStueliQuery, TError, TData>,
) =>
  useQuery<GetReferenzStueliQuery, TError, TData>(
    ['GetReferenzStueli', variables],
    amplifyFetcher<GetReferenzStueliQuery, GetReferenzStueliQueryVariables>(
      GetReferenzStueliDocument,
      variables,
    ),
    options,
  );
export const ListReferenzStuelisDocument = `
    query ListReferenzStuelis($filter: ModelReferenzStueliFilterInput, $limit: Int, $nextToken: String) {
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
export const useListReferenzStuelisQuery = <
  TData = ListReferenzStuelisQuery,
  TError = unknown,
>(
  variables?: ListReferenzStuelisQueryVariables,
  options?: UseQueryOptions<ListReferenzStuelisQuery, TError, TData>,
) =>
  useQuery<ListReferenzStuelisQuery, TError, TData>(
    variables === undefined
      ? ['ListReferenzStuelis']
      : ['ListReferenzStuelis', variables],
    amplifyFetcher<ListReferenzStuelisQuery, ListReferenzStuelisQueryVariables>(
      ListReferenzStuelisDocument,
      variables,
    ),
    options,
  );
export const GetUserDocument = `
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
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>,
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['GetUser', variables],
    amplifyFetcher<GetUserQuery, GetUserQueryVariables>(
      GetUserDocument,
      variables,
    ),
    options,
  );
export const ListUsersDocument = `
    query ListUsers($email: String, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListUsersQuery = <TData = ListUsersQuery, TError = unknown>(
  variables?: ListUsersQueryVariables,
  options?: UseQueryOptions<ListUsersQuery, TError, TData>,
) =>
  useQuery<ListUsersQuery, TError, TData>(
    variables === undefined ? ['ListUsers'] : ['ListUsers', variables],
    amplifyFetcher<ListUsersQuery, ListUsersQueryVariables>(
      ListUsersDocument,
      variables,
    ),
    options,
  );
export const OnCreateAnlageDocument = `
    subscription OnCreateAnlage($users: String) {
  onCreateAnlage(users: $users) {
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
export const OnUpdateAnlageDocument = `
    subscription OnUpdateAnlage($users: String) {
  onUpdateAnlage(users: $users) {
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
export const OnDeleteAnlageDocument = `
    subscription OnDeleteAnlage($users: String) {
  onDeleteAnlage(users: $users) {
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
export const OnCreateAnlagenUserDocument = `
    subscription OnCreateAnlagenUser($userEmail: String) {
  onCreateAnlagenUser(userEmail: $userEmail) {
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
export const OnUpdateAnlagenUserDocument = `
    subscription OnUpdateAnlagenUser($userEmail: String) {
  onUpdateAnlagenUser(userEmail: $userEmail) {
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
export const OnDeleteAnlagenUserDocument = `
    subscription OnDeleteAnlagenUser($userEmail: String) {
  onDeleteAnlagenUser(userEmail: $userEmail) {
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
export const OnCreateReferenzStueliDocument = `
    subscription OnCreateReferenzStueli {
  onCreateReferenzStueli {
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
export const OnUpdateReferenzStueliDocument = `
    subscription OnUpdateReferenzStueli {
  onUpdateReferenzStueli {
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
export const OnDeleteReferenzStueliDocument = `
    subscription OnDeleteReferenzStueli {
  onDeleteReferenzStueli {
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
export const OnCreateUserDocument = `
    subscription OnCreateUser($email: String) {
  onCreateUser(email: $email) {
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
export const OnUpdateUserDocument = `
    subscription OnUpdateUser($email: String) {
  onUpdateUser(email: $email) {
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
export const OnDeleteUserDocument = `
    subscription OnDeleteUser($email: String) {
  onDeleteUser(email: $email) {
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
