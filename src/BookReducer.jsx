import { createSlice } from '@reduxjs/toolkit';
import { bookList } from './Data';

const bookSlice = createSlice({
  name: 'books',
  initialState: bookList,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, book, category, price } = action.payload;
      const updateBook = state.find((book) => book.id === id);
      if (updateBook) {
        updateBook.book = book;
        updateBook.category = category;
        updateBook.price = price;
      }
    },
    deleteBook: (state, action) => {
      const { id } = action.payload;
      const updateBook = state.find((book) => book.id === id);
      if (updateBook) {
        return state.filter((x) => x.id !== id);
      }
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
