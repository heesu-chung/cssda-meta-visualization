import { combineReducers } from "redux";
import page from "./pageReducer";
import sphere from "./sphereReducer";

const rootReducer = combineReducers({
    page,
    sphere,
});

export default rootReducer;
