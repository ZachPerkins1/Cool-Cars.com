
import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material/';
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <AppBar position="static" style={{ width: '100vw', margin: 0}}>
      <Toolbar>
        <Box mr={2}>
            <ToysTwoToneIcon fontSize='large'/>
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
        <Box>
            <AccountCircleSharpIcon fontSize='large'/>
        </Box>
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


export default NavBar;