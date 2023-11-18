import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from './BookReducer';

const Update = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const currentBook = books.filter((x) => x.id === id);
  const { book, category, price } = currentBook[0];

  const [ubook, setBook] = useState(book);
  const [ucategory, setCategory] = useState(category);
  const [uprice, setPrice] = useState(price);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateBook({
        id: id,
        book: ubook,
        category: ucategory,
        price: uprice,
      })
    );
    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Book Details</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="book">Book Name:</label>
            <input
              type="text"
              name="book"
              placeholder="Enter Book Name..."
              className="form-control"
              value={ubook}
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
              value={ucategory}
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
              value={uprice}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
