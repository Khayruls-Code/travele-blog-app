import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const AddBlog = () => {
  const { user } = useAuth()
  const [data, setData] = useState({})
  const getData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newObj = { ...data }
    newObj[field] = value;
    newObj.status = 'Pending';
    newObj.traveledBy = user?.displayName || ''
    newObj.email = user.email
    setData(newObj)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://powerful-coast-12866.herokuapp.com/blogs', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Blog Posted Successfully, waiting for Approved')
          e.target.reset()
        }
      })
  }

  return (
    <div>
      <Typography variant='h4' sx={{ borderBottom: "2px solid #777", mb: 5 }}>Add Blog</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Title"
          variant="filled"
          name='title'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <TextField
          required
          label="Img URL"
          variant="filled"
          name='img'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <TextField
          required
          label="Location"
          variant="filled"
          name='location'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <TextField
          required
          label="Cost $"
          variant="filled"
          type='number'
          name='cost'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <TextField
          required
          label=""
          variant="filled"
          type='date'
          name='date'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <TextField
          required
          label="Rating"
          variant="filled"
          type='number'
          name='rating'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <FormControl variant="filled" sx={{ width: "100%", maxWidth: "500px", my: 1 }}>
          <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={data.category || ''}
            name='category'
            onChange={getData}
          >
            <MenuItem value="Solo Travel">Solo Travel</MenuItem>
            <MenuItem value='Backpacking Trip'>Backpacking Trip</MenuItem>
            <MenuItem value='Event Travel'>Event Travel</MenuItem>
            <MenuItem value='Siblings-Only Vacation'>Siblings-Only Vacation</MenuItem>
            <MenuItem value='The Impromptu Trip'>The Impromptu Trip</MenuItem>
            <MenuItem value='Family Vacation'>Family Vacation</MenuItem>
          </Select>
        </FormControl><br />
        <TextField
          required
          label="Description"
          variant="filled"
          name='description'
          onChange={getData}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          multiline
          rows={4}
        /><br />
        <Button sx={{ py: 1, my: 2 }} type='submit' variant='outlined'>Submit</Button>
      </form>
    </div>
  );
};

export default AddBlog;