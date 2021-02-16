import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  no: "0",
  name: "",
  route: "Inbox",
  title: "",
  body: "",
  createdAt: Date.now(),
};

export const emailSlice = createSlice({
  initialState,
  name: "email",
  reducers: {
    emailNo: (state, action) => {
      state.no = action.payload;
    },
    emailName: (state, action) => {
      state.name = action.payload;
    },
    emailRoute: (state, action) => {
      state.route = action.payload;
    },
    emailTitle: (state, action) => {
      state.title = action.payload;
    },
    emailBody: (state, action) => {
      state.body = action.payload;
    },
    emailCreatedAt: (state, action) => {
      state.createdAt = action.payload;
    },
  },
});

export const {
  emailName,
  emailBody,
  emailCreatedAt,
  emailNo,
  emailRoute,
  emailTitle,
} = emailSlice.actions;

export const selectEmail = state => state.email

export default emailSlice.reducer
