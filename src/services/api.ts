import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import mapRestaurants, { Restaurant } from '../mapData/mapRestaurants';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '',
      transformResponse: (response) => {
        const transform = mapRestaurants(response);

        return transform;
      },
    }),
    getMenu: builder.query<Restaurant[], string>({
      query: (id) => `${id}`,
      transformResponse: (response) => {
        const transform = mapRestaurants([response]);
        console.log('response', transform);
        return transform;
      },
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetMenuQuery } = api;
export default api;
