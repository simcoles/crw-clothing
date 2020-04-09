import { ADD_SHOP_ITEMS } from "./shop.types";

export const addShopItems = (shopItems) => ({
  type: ADD_SHOP_ITEMS,
  payload: shopItems,
});
