import React, { useState, useEffect } from 'react';
import {Button, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function BasicMenu({ anchor, loginStatus, handleLogout, user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(loginStatus);

    useEffect(() => {
        setIsLoggedIn(loginStatus)
    }, [loginStatus])

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setAnchorEl(null);
    handleLogout();
    navigate('/');
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            color: '#fff',
        }}
      >
        {anchor}
      </Button>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
    >
    {isLoggedIn ? (
        user && (user.role === 'admin') ? [
            <MenuItem key={'admin'} onClick={handleClose}>
                <AdminPageLink />
            </MenuItem>,
            <MenuItem
                key={'logout'} onClick={() => handleLogoutClick()}
                sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#1976d2' }}
            >
                Logout
            </MenuItem>
        ] : [
            <MenuItem
                key={'logout'} onClick={() => handleLogoutClick()}
                sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#1976d2' }}
            >
                Logout
            </MenuItem>
        ]
    ) : [
        <MenuItem key={'login'} onClick={handleClose}>
            <LoginLink />
        </MenuItem>,
        <MenuItem key={'register'} onClick={handleClose}>
            <RegisterLink />
        </MenuItem>
    ]}
    </Menu>
    </div>
  );
}


function RegisterLink() {
    return (
      <Link to={`/register`}>
        <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#1976d2' }}>
          Register
        </Typography>
      </Link>
    );
}


function LoginLink() {
    return (
        <Link to={`/login`}>
        <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#1976d2' }}>
            Login
        </Typography>
        </Link>
    );
}

function AdminPageLink() {
    return (
        <Link to={`/adminPage`}>
        <Typography variant="h7" sx={{ fontFamily: 'Figtree, Roboto, sans-serif', color: '#1976d2' }}>
            Admin Page
        </Typography>
        </Link>
    );
}