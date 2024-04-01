import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import { saveState } from "../utilities/utilities";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export default store;
