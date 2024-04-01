import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../../utilities/utilities";

const initialState = {
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: loadState() || initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({ id: lastElement.id + 1, ...payload });
      }
    },
    updateTask: (state, { payload }) => {
      const target = state?.tasks?.find((task) => task?.id === payload.id);
      target.status = payload?.status;
      target.title = payload?.title;
      target.description = payload?.description;
      target.assignee = payload?.assignee;
      target.team = payload?.team;
      target.priority = payload?.priority;
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks?.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
