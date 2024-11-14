import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  credentials: "include",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: [
    "user"
  ],
  endpoints: () => ({}),
});
