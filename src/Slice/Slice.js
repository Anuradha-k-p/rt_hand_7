import { createSlice } from "@reduxjs/toolkit";



const initialState = [
  { name: "Swapnali", age: 23, course: "MERN", batch: "EA24" },
  { name: "Swapnali", age: 23, course: "MERN", batch: "EA24" },
  { name: "Swapnali", age: 23, course: "MERN", batch: "EA24" },
  { name: "Swapnali", age: 23, course: "MERN", batch: "EA24" },
  { name: "Swapnali", age: 23, course: "MERN", batch: "EA24" },
];

const StudentSlice = createSlice({

  name: "stu_Data",
  initialState,

  reducers: {
    editStudent: (state, action) => {
      state[action.payload.index] = action.payload.info;
    },
    addStudent: (state, action) => {
      state.push(action.payload.info);
    },
  },
});


export const { editStudent, addStudent } = StudentSlice.actions;
export default StudentSlice.reducer;