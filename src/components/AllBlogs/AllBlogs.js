import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { FaRegTimesCircle } from 'react-icons/fa'
import { RiEditCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://powerful-coast-12866.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  const handleDelete = (id) => {
    const makeSure = window.confirm('Are you sure to want to delete this blog?')
    if (makeSure) {
      fetch(`https://powerful-coast-12866.herokuapp.com/blogs/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            const rest = blogs.filter(blog => blog._id !== id)
            setBlogs(rest)
          }
        })
    }
  }
  //update status
  const handleStatus = (e, id) => {
    const statusObj = { status: e.target.value }
    fetch(`https://powerful-coast-12866.herokuapp.com/blogs/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(statusObj)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      })
  }
  return (
    <div>
      <Typography variant='h4' sx={{ borderBottom: "2px solid #777", mb: 5 }}>All Blogs</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} >Blog Img</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Location</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Date</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Cost</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Status</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs?.map((blog) => (
              <TableRow
                key={blog._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img style={{ width: "60px" }} src={blog.img} alt="" />
                </TableCell>
                <TableCell align="center">{blog.location}</TableCell>
                <TableCell align="center">{blog.date}</TableCell>
                <TableCell align="center">{blog.cost}</TableCell>
                <TableCell align="center">
                  <select onChange={(e) => handleStatus(e, blog._id)} className='selectOption'>
                    <option value={blog.status}>{blog.status}</option>
                    <option value="Approved">Approved</option>
                  </select>
                </TableCell>
                <TableCell align="center">
                  <FaRegTimesCircle onClick={() => handleDelete(blog._id)} style={{ fontSize: "22px", cursor: "pointer", color: "red" }} />
                  <NavLink to={`/blog/update/${blog._id}`}><RiEditCircleLine style={{ fontSize: "22px", cursor: "pointer", color: "green", marginLeft: '10px' }} /></NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllBlogs;