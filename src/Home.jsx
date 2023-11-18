import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookReducer';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook({id:id}))
  };

  return (
    <div className="container">
      <h2>BookStore</h2>
      <Link to="/addbook" className="btn btn-success my-3">
        Add Book
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>BookName</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((x, index) => (
            <tr key={index}>
              <td>{x.id}</td>
              <td>{x.book}</td>
              <td>{x.category}</td>
              <td>${x.price}</td>
              <td>
                <Link to={`/update/${x.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(x.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
