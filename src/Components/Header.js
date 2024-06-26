import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
      <AppBar position="static" className="top-bar" style={{ backgroundColor: "#1C4670" }}>
        <Toolbar>
          <Box className="contact-info">
            <MailIcon />
            <Typography variant="body1" className="contact-text">
              www.registerkaro.in
            </Typography>
            <PhoneIcon className="phone-icon" />
            <Typography variant="body1" className="contact-text">
              +918447746183
            </Typography>
          </Box>
          <Box className="social-icons">
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className="main-bar" style={{ backgroundColor: "white", color: "black" }}>
        <Toolbar className="main-toolbar">
          <Box className="logo-container">
            <img src="Images/logo_logo 1.png" alt="Register Karo" className="logo" />
          </Box>
          <Box className="nav-links">
            <Typography variant="body1" className="nav-link">
              Home
            </Typography>
            <Typography variant="body1" className="nav-link">
              Our Services
            </Typography>
            <Typography variant="body1" className="nav-link">
              Blog
            </Typography>
            <Typography variant="body1" className="nav-link">
              Contact Us
            </Typography>
            <Typography variant="body1" className="nav-link">
              About Us
            </Typography>
          </Box>
          <Box className="action-buttons">
            <IconButton color="inherit">
              <SearchIcon className='search-icon' />
            </IconButton>
            <Button variant="contained" className="expert-button" style={{ backgroundColor: "#e68900" }}>
              Talk An Expert
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
