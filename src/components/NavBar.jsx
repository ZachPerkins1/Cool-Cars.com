
import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material/';
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('userData');
    console.log("Logged in user from session storage:", loggedInUser);
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      setUser(null); // Set user to null if there's no user in sessionStorage
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <AppBar position="static" style={{ width: '100vw', margin: 0 }}>
      <Toolbar>
        <Box mr={2}>
          <ToysTwoToneIcon fontSize='large' />
        </Box>
        <Box mr={4}>
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
            <Box ml={2}>
              <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </Box>
            {user.role === 'admin' && (
              <Box ml={2}>
                <AdminPageLink />
              </Box>
            )}
          </>
        ) : (
          <>
            <Box flexGrow={1}>
              <RegisterLink />
            </Box>
            <Box>
              <LoginLink />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function HomeLink() {
  return (
    <Link to={`/`}>
      <Typography variant="h6" color={'white'}>
        Cool Cars
      </Typography>
    </Link>
  )
}

function InventoryLink() {
  return (
    <Link to={`/inventory`}>
      <Button variant="contained">Inventory</Button>
    </Link>
  );
}

function AboutUsLink() {
  return (
    <Link to={`/aboutUs`}>
      <Button variant="contained">About Us</Button>
    </Link>
  );
}

function WishlistLink() {
  return (
    <Link to={`/wishlist`}>
      <Button variant="contained">Wishlist</Button>
    </Link>
  );
}

function RegisterLink() {
  return (
    <Link to={`/register`}>
      <Button variant="contained">Register</Button>
    </Link>
  );
}

function LoginLink() {
  return (
    <Link to={`/login`}>
      <AccountCircleSharpIcon fontSize='large' />
    </Link>
  );
}

function AdminPageLink() {
  return (
    <Link to={`/adminPage`}>
      <Button variant="contained">Admin Page</Button>
    </Link>
  );
}


export default NavBar;