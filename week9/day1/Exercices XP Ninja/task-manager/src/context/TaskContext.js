import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialState = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
case "ADD_TASK":
  return {
    tasks: [
      ...state.tasks,
      {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
    ]
  };
  }
}


export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}