import React, { useState } from 'react'
import { Button, Box, FormLabel, TextField, FormControlLabel, Checkbox } from "@mui/material"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const history = useNavigate();
  const [inputField, setInputField] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: null, // Initialize image as null
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputField((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setInputField((prevInput) => ({
      ...prevInput,
      image: e.target.files[0], // Update the image object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/books";
    const formData = new FormData();
    formData.append('name', inputField.name);
    formData.append('author', inputField.author);
    formData.append('description', inputField.description);
    formData.append('price', inputField.price);
    formData.append('image', inputField.image);

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        console.log("Added successfully");
        history("/books");
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent="center" maxWidth={700} alignContent="center" alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={5}>
      <FormLabel style={{ marginTop: '10px' }} margin='normal'>Name</FormLabel>
      <TextField value={inputField.name} onChange={handleChange} fullWidth variant='outlined' name='name' />
      <FormLabel style={{ marginTop: '10px' }} margin='normal'>Author</FormLabel>
      <TextField value={inputField.author} onChange={handleChange} fullWidth variant='outlined' name='author' />
      <FormLabel style={{ marginTop: '10px' }} margin='normal'>Description</FormLabel>
      <TextField value={inputField.description} onChange={handleChange} fullWidth variant='outlined' name='description' />
      <FormLabel style={{ marginTop: '10px' }} margin='normal'>Price</FormLabel>
      <TextField value={inputField.price} onChange={handleChange} type='number' fullWidth variant='outlined' name='price' />
      <FormLabel style={{ marginTop: '10px' }} margin='normal'>Image</FormLabel>
      <input type="file" accept="image/*" name="image" onChange={handleImageChange} />
      {inputField.image && (
  <img src={URL.createObjectURL(inputField.image)} alt={`Cover of ${inputField.name}`}/>

)}

      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        }
        label="Available"
      />

      <Button style={{ marginTop: '15px' }} variant="contained" type='submit'>Add Book</Button>
    </Box>
  </form>
}

export default AddBook;
