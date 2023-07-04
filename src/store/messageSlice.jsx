import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    loading: false,
    error: null,
    messages: [],
  },
  reducers: {
    loadStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { loadStart, loadFailure, fetchMessages } = messageSlice.actions;

export const allMessages = () => async (dispatch) => {
  dispatch(loadStart());
  try {
    await axios
      .get("https://sf-final-project-be.herokuapp.com/api/cases/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => dispatch(fetchMessages(response.data)));
  } catch (e) {
    dispatch(loadFailure(e.message));
  }
};
export default messageSlice.reducer;
