import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface TodoState {
    items: string[];
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: []
  } as TodoState,

  reducers:{
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload); 
    }
  },
})

export const todo = todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
