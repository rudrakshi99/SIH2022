import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
});

export default rootReducer;
