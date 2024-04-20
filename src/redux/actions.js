import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

console.log(addTask("Learn Redux Toolkit"));
/**
 * {
 *   type: 'tasks/addTask',
 *   payload: {
 *     text: 'Learn Redux Toolkit',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     completed: false
 *   }
 * }
 **/