import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import patientReducer from "./PatientReducer";

const Reducer = combineReducers({
  patient: patientReducer,
});
const configureStor = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const Store = createStore(Reducer, composeEnhancers(applyMiddleware()));
  return Store;
};
const Store = configureStor();
export default Store;
