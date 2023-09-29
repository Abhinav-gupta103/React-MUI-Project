import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden'; // Import the Hidden component

const Navbar = () => {
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchor(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Company Name
                </Typography>
                <div style={{ marginLeft: 'auto' }}>
                    {/* Use mdDown to hide the icon on tablets */}
                    <Hidden mdDown>
                        <Button component={Link} to="/" color="inherit">Home</Button>
                        <Button component={Link} to="/plans" color="inherit">Plans</Button>
                        <Button component={Link} to="/wishlist" color="inherit">Wishlist</Button>
                        <Button component={Link} to="/signup" color="inherit">SignUp</Button>
                    </Hidden>
                    {/* Use mdUp to show the icon on tablets and smaller screens */}
                    <Hidden mdUp>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mobileMenuAnchor}
                            open={Boolean(mobileMenuAnchor)}
                            onClose={handleMobileMenuClose}
                        >
                            <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>Home</MenuItem>
                            <MenuItem component={Link} to="/plans" onClick={handleMobileMenuClose}>Plans</MenuItem>
                            <MenuItem component={Link} to="/wishlist" onClick={handleMobileMenuClose}>Wishlist</MenuItem>
                            <MenuItem component={Link} to="/signup" onClick={handleMobileMenuClose}>SignUp</MenuItem>
                        </Menu>
                    </Hidden>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
