import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { VscThreeBars } from 'react-icons/vsc'
import { NavLink, Outlet } from 'react-router-dom';
import './dashboard.css'
import useAuth from '../../hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, singOutUser } = useAuth()
  console.log(admin)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <NavLink to='/'>
          <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
            Home
          </ListItem>
        </NavLink>
        {!admin && < NavLink to='myblogs'>
          <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
            My Blogs
          </ListItem>
        </NavLink>}
        {admin && <NavLink to='allblogs'>
          <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
            All Blogs
          </ListItem>
        </NavLink>}
        <NavLink to='addblog'>
          <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
            Add Blogs
          </ListItem>
        </NavLink>
        {admin && <NavLink to='makeadmin'>
          <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
            Make Admin
          </ListItem>
        </NavLink>}
        <ListItem onClick={singOutUser} sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "#333" }} button>
          Log Out
        </ListItem>
      </List>
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <VscThreeBars />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;