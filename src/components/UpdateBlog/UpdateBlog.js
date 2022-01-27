import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const UpdateBlog = () => {
  const { updateId } = useParams()
  const [blog, setBlog] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://powerful-coast-12866.herokuapp.com/blogs/${updateId}`)
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [updateId])
  const { user } = useAuth()
  const [data, setData] = useState({})
  const getData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newObj = { ...data }
    newObj[field] = value;
    newObj.status = blog.status;
    newObj.traveledBy = user?.displayName || ''
    newObj.email = user.email
    setData(newObj)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch(`https://powerful-coast-12866.herokuapp.com/blogs/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          navigate('/dashboard/allblogs')
        }
      })
  }

  return (
    <div className='update-blog'>
      <div className="form">
        <h3 style={{ textAlign: "center" }}>Update Blog: {blog?.title}</h3>
        <form onSubmit={handleUpdate}>
          <TextField
            required
            label=""
            variant="filled"
            onChange={getData}
            value={data.title || blog.title || ''}
            name='title'
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          /><br />
          <TextField
            required
            label=""
            value={data.img || blog?.img || ''}
            variant="filled"
            name='img'
            onChange={getData}
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          /><br />
          <TextField
            required
            value={data.location || blog?.location || ''}
            label=""
            variant="filled"
            name='location'
            onChange={getData}
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          /><br />
          <TextField
            required
            value={data.cost || blog?.cost || ''}
            label=""
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
            value={data.rating || blog?.rating || ''}
            label=""
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
            label=""
            variant="filled"
            value={data.description || blog?.description || ''}
            name='description'
            onChange={getData}
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
            multiline
            rows={4}
          /><br />
          <Button sx={{ py: 1, my: 2 }} type='submit' variant='outlined'>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;