import { createSelector } from "@reduxjs/toolkit";

export const getDragons = (state) => state.rockets.items;
export const getIsLoading = (state) => state.rockets.isLoading;
export const getActiveIdRocket = (state) => state.rockets.activeIdRocket;

export const getFindedRocket = createSelector(
  [getDragons, getActiveIdRocket],
  (items, id) => {
    const rocket = items.find((el) => el.id === id);
    console.log("selector id", id);
    return rocket;
  }
);
