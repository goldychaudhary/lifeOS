import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DashboardData = {
  __typename?: 'DashboardData';
  monthlyExpense: Scalars['Float']['output'];
  monthlyIncome: Scalars['Float']['output'];
  totalBalance: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  dashboardData: DashboardData;
  hello: Scalars['String']['output'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DashboardDataQueryVariables = Exact<{ [key: string]: never; }>;


export type DashboardDataQuery = { __typename?: 'Query', dashboardData: { __typename?: 'DashboardData', totalBalance: number, monthlyIncome: number, monthlyExpense: number } };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const DashboardDataDocument = gql`
    query DashboardData {
  dashboardData {
    totalBalance
    monthlyIncome
    monthlyExpense
  }
}
    `;

/**
 * __useDashboardDataQuery__
 *
 * To run a query within a React component, call `useDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardDataQuery(baseOptions?: Apollo.QueryHookOptions<DashboardDataQuery, DashboardDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardDataQuery, DashboardDataQueryVariables>(DashboardDataDocument, options);
      }
export function useDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardDataQuery, DashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardDataQuery, DashboardDataQueryVariables>(DashboardDataDocument, options);
        }
export function useDashboardDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DashboardDataQuery, DashboardDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DashboardDataQuery, DashboardDataQueryVariables>(DashboardDataDocument, options);
        }
export type DashboardDataQueryHookResult = ReturnType<typeof useDashboardDataQuery>;
export type DashboardDataLazyQueryHookResult = ReturnType<typeof useDashboardDataLazyQuery>;
export type DashboardDataSuspenseQueryHookResult = ReturnType<typeof useDashboardDataSuspenseQuery>;
export type DashboardDataQueryResult = Apollo.QueryResult<DashboardDataQuery, DashboardDataQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export function useHelloSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloSuspenseQueryHookResult = ReturnType<typeof useHelloSuspenseQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;