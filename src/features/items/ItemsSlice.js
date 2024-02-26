import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { ApiSlice } from "../api/apiSlice";

const itemsAdapter = createEntityAdapter();

const intialState = itemsAdapter.getInitialState();

export const extendedApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/?start=10&limit=40",
      transformResponse: (responseData) => {
        const itemsList = responseData || [];

        return itemsAdapter.setAll(intialState, itemsList);
      },
    }),
  }),
});

export const { useGetItemsQuery: useGetItemsQuery } = extendedApiSlice;

// Useful for grabbing status of getPosts request
export const selectItemsResult = extendedApiSlice.endpoints.getItems.select();

// Create memoized selector
const selectItemsData = createSelector(
  selectItemsResult,
  (result) => result.data
);

export const { selectAll: selectAllItems } = itemsAdapter.getSelectors(
  (state) => selectItemsData(state) ?? intialState
);
