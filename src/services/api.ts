import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import mapRestaurants, { Restaurant } from '../mapData/mapRestaurants';

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
      transformResponse: (response) => {
        const transform = mapRestaurants(response);

        return transform;
      },
    }),
    getMenu: builder.query<Restaurant[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response) => {
        const transform = mapRestaurants([response]);
        return transform;
      },
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetMenuQuery, usePurchaseMutation } =
  api;
export default api;
