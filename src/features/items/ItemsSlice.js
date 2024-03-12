import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { ApiSlice } from "../api/apiSlice";

const itemsAdapter = createEntityAdapter();

const initialState = itemsAdapter.getInitialState({ itemCount: 0 });

export const extendedApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (args) => {
        const {
          start = 0,
          limit = 10,
          reversed = false,
          sortBy = 1,
        } = args || {};
        return `?start=${start}&limit=${limit}&reverse=${reversed}&sortBy=${sortBy}`;
      },
      /* query: () => "/", */
      transformResponse: (responseData) => {
        const { itemsList = [], itemCount = 0 } = responseData || {};

        const itemsState = itemsAdapter.setAll(initialState, itemsList);

        return {
          ...itemsState,
          itemCount,
        };
      },
    }),
  }),
});

export const { useGetItemsQuery: useGetItemsQuery } = extendedApiSlice;
