import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookReducer';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState();

  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: books[books.length - 1].id + 1,
        book,
        category,
        price,
      })
    );
    navigate('/');
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="book">Book Name:</label>
            <input
              type="text"
              name="book"
              placeholder="Enter Book Name..."
              className="form-control"
              onChange={(e) => {
                setBook(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              placeholder="Category..."
              className="form-control"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              placeholder="Price..."
              className="form-control"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
