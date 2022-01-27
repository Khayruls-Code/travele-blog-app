import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import MyBlogs from "./components/MyBlogs/MyBlogs";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import AddBlog from "./components/AddBlog/AddBlog";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import UpdateBlog from "./components/UpdateBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blogs/:blogId' element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
          <Route path='/blog/update/:updateId' element={<UpdateBlog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route index element={<AddBlog />} />
            <Route path='allblogs' element={<AdminRoute><AllBlogs /></AdminRoute>} />
            <Route path='myblogs' element={<MyBlogs />} />
            <Route path='allblogs' element={<AdminRoute><AllBlogs /></AdminRoute>} />
            <Route path='addblog' element={<AddBlog />} />
            <Route path='makeadmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
