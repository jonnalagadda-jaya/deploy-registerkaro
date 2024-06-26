import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const MainContent = () => {
  return (
    <div className="main-content">
      <Box className="left-section">
      <Typography variant="h6" className="heading">
          Google Rating
        </Typography>
        <Typography variant="h3" className="heading">
          Your trusted partner for compliance business needs
        </Typography>
        <Typography variant="body1" className="description" style={{fontSize:"20px"}}>
          An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.
        </Typography>
        <Box className="statistics">
          <Box className="stat-item">
            <WindowIcon style={{fontSize:"35px"}}/>
            <Box className="number-name">
            <Typography variant="h6">4.5+</Typography>
            <Typography variant="body2">Customer Rating</Typography>
            </Box>
          </Box>
          <Box className="stat-item">
            <Diversity3Icon style={{fontSize:"35px"}}/>
            <Box className="number-name">
            <Typography variant="h6">20,000+</Typography>
            <Typography variant="body2">Clients</Typography>
            </Box>
          </Box>
          <Box className="stat-item">
            <HandshakeIcon style={{fontSize:"35px"}}/>
            <Box className="number-name">
            <Typography variant="h6">99.8%</Typography>
            <Typography variant="body2">Financial Stability</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="button">
          <Button variant="contained" className="cta-button">
            Talk An Expert
          </Button>
          <Box className="play-btn">
          <PlayCircleIcon />
          <Typography variant="outlined" className="learn-button">
            See how it works
          </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="right-section">
        <Box className="right-btn">
        <img src="Images/Group-6631 1.png" alt="Business Illustration" className="illustration" />
        <Box className="service-buttons">
          <Box>
          <Box className="service-button">
            Annual Compliance
          </Box>
          <Box className="service-button">
            Payroll Services
          </Box>
          <Box className="service-button">
            Company Formation
          </Box>
          <Box className="service-button">
            Annual Compliance
          </Box>
          </Box>
          <Box>
        <img src="Images/Group 1261153002.png" alt="Business Illustration" className="bottom-img" />
        </Box>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainContent;
