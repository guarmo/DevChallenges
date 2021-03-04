import { combineReducers } from "redux";
import modes from "./modes";
import items from "./items";
import shoppingList from "./shoppingList";
import historyList from "./historyList";

export default combineReducers({
  modes,
  items,
  shoppingList,
  historyList,
});
