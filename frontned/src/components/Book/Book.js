import React from 'react';
import { Button } from '@mui/material';
import axios from "axios";
import "./Book.css";
import {Link, useNavigate} from 'react-router-dom'

const Book = (props) => {
    const { _id, name, description, price, author, image } = props.book;
    const history = useNavigate();

    const delectHandler = async () => {
        await axios.delete(`http://localhost:5000/books/${_id}`)
          .then((res) => res.data)
          .then(() => history("/books"));
          window.location.reload();
      };
    const imageUrl = `http://localhost:5000/uploads/${image}`;
    return (
        <div className='card'>
            <img src={imageUrl} alt={_id} />
            <h3>{name}</h3>
            <article>By {author}</article>
            <p>{description}</p> 
            <h2>Rs. {price}</h2>
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
            <Button onClick={delectHandler}>Delete</Button>
        </div>
    );
};

export default Book;
