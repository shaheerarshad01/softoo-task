import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://my-json-server.typicode.com/benirvingplt';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: async headers => {
    const data: [] = [];
    if (data) {
      headers.set('Authorization', `Bearer ${data}`);
    }
    return headers;
  },
});
