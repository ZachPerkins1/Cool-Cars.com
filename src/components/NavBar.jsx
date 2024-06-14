import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material/';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './NavBar.css';


function NavBar() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('userData');
    console.log("Logged in user from session storage:", loggedInUser);
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    } else {
      setUser(null); // Set user to null if there's no user in sessionStorage
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static" style={{ width: '100vw', margin: 0, msOverflowX: 'hidden' }}>
      <Toolbar>
        <Box mr={4} ml={2}>
          <HomeLink />
        </Box>
        <Box mr={2}>
          <InventoryLink />
        </Box>
        <Box mr={2}>
          <WishlistLink />
        </Box>
        <Box flexGrow={1}>
          <AboutUsLink />
        </Box>
        {user ? (
          <>
            <Typography variant="h6" color="white">
              {`Welcome, ${user.firstName}`}
            </Typography>
            <Box sx={{ mr: 2 }}>
              <DropdownMenu anchor={<AccountCircleSharpIcon fontSize='large'/>} loginStatus={isLoggedIn} handleLogout={handleLogout} user={user}/>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ mr: 2 }}>
              <DropdownMenu anchor={<AccountCircleSharpIcon fontSize='large'/>} loginStatus={isLoggedIn} handleLogout={handleLogout} user={user}/>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function HomeLink() {
  return (
    <Link to={`/`} className='nav-link'>
      <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>
        Home
      </Typography>
    </Link>
  );
}

function InventoryLink() {
  return (
    <Link to={`/inventory`} className='nav-link'>
      <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>
        Inventory
      </Typography>
    </Link>
  );
}

function AboutUsLink() {
  return (
    <Link to={`/aboutUs`} className='nav-link'>
      <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>
        About Us
      </Typography>
    </Link>
  );
}

function WishlistLink() {
  return (
    <Link to={`/wishlist`} className='nav-link'>
      <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>
        Wishlist
      </Typography>
    </Link>
  );
}

export default NavBar;