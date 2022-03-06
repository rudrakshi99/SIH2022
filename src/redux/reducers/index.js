import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";
import { getEquipmentsReducer } from "./equipReducers";

const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  getEquipmentsReducer
});

export default rootReducer;
