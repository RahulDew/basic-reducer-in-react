import updateNum from "./incdnc";
import updateNoteList from "./adddelNote";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  updateNum,
  updateNoteList
});

export default rootReducers;
