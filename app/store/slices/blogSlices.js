import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    id : "id placeholder",
      title: "title placeholder",
      description : "description placeholder",
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const {title, id, description} = action.payload
      state.id = id;
      state.title = title;
      state.description = description;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {

        console.log("inside the extrareducer")
      console.log(state,action.payload)



        return {...state, ...action.payload}
      },
    },
  },
});

export const { addBlog} = blogSlice.actions;
export default blogSlice.reducer;









// export const selectBlog = (state) => state.Blog.value;
// export interface blogState {
//     id : String,
//     title : String,
//     description : String
// }