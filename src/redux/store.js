import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import educationReducer from "./education/education.reducer";
import experienceReducer from "./experience/experience.reducer";
import languagesReducer from "./languages/languages.reducer";
import habilitiesReducer from "./habilities/habilities.reducer";

const rootReducer = combineReducers({
    education: educationReducer,
    experience: experienceReducer,
    languages: languagesReducer,
    habilities: habilitiesReducer,
    
}); 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
