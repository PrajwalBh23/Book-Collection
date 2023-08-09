import React from 'react';
import { Button } from '@mui/material';
import "./Book.css"

const Book = (props) => {
    const { _id, name, description, price, author, image } = props.book;
    const imageUrl = `http://localhost:5000/uploads/${image}`;
    return (
        <div className='card'>
            <img src={imageUrl} alt={_id} />
            <h3>{name}</h3>
            <article>By {author}</article>
            <p>{description}</p> 
            <h2>Rs. {price}</h2>
            <Button>Update</Button>
            <Button>Delete</Button>
        </div>
    );
};

export default Book;
