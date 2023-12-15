import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../lib/baseQuery';

export const productsApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'products/api',
  tagTypes: [],
  endpoints: (build) => ({
    fetchProduct: build.query<any, void>({
      query: () => {
        return {
          url: `/products/products`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useFetchProductQuery } = productsApi;

export const { fetchProduct } = productsApi.endpoints;

export default productsApi;
