
import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material/';
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom'


function NavBar() {
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
        <Box flexGrow={1}>
          <RegisterLink />
        </Box>
        <Box>
          <AccountCircleSharpIcon fontSize='large' />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function HomeLink() {
  return (
    <Link to={`/`}>
      <Typography variant="h6" sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#fff' }}>
        CoolCars.com
      </Typography>
    </Link>
  )
}

function InventoryLink() {
  return (
    <Link to={`/inventory`}>
      <Button variant="contained" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>Inventory</Button>
    </Link>
  );
}

function AboutUsLink() {
  return (
    <Link to={`/aboutUs`}>
      <Button variant="contained" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>About Us</Button>
    </Link>
  );
}

function WishlistLink() {
  return (
    <Link to={`/wishlist`}>
      <Button variant="contained" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>Wishlist</Button>
    </Link>
  );
}

function RegisterLink() {
  return (
    <Link to={`/register`}>
      <Button variant="contained" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>Register</Button>
    </Link>
  );
}


export default NavBar;