import { combineReducers } from "redux";
import { contactReducers } from "./contactReducers";

export const rootReducer = combineReducers({
  contacts: contactReducers,
});
