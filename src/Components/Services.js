import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GavelIcon from '@mui/icons-material/Gavel';
import PaymentsIcon from '@mui/icons-material/Payments';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Services = () => {
  return (
    <Box className="services-container">
      <Box className="names">
        <Typography gutterBottom>
          WELCOME TO REGISTERKARO.IN
        </Typography>
        <Typography variant="h4" gutterBottom>
          Explore Our Services
        </Typography>
      </Box>
      <Grid className="services-grid">
        <Box className="card">
          <BusinessIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Company Formation
          </Typography>
          <Typography gutterBottom>
            Build web-based solutions that enhance customer experience.
          </Typography>
        </Box>
        <Box className="card">
          <AssignmentIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Company Secretarial Services
          </Typography>
          <Typography gutterBottom>
            Make data-driven decisions and utilize technology to reach business goals.
          </Typography>
        </Box>
        <Box className="card">
          <LocationCityIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Virtual Office Address
          </Typography>
          <Typography gutterBottom>
            Foster customer relationships by effectively serving your market.
          </Typography>
        </Box>
        <Box className="card">
          <GavelIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Annual Compliance Services
          </Typography>
          <Typography gutterBottom>
            Turn your ideas into modern products with our design experts.
          </Typography>
        </Box>
        <Box className="card">
          <PaymentsIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Payroll Services
          </Typography>
          <Typography gutterBottom>
            Expand your business across the globe with minimal effort.
          </Typography>
        </Box>
        <Box className="card">
          <MenuBookIcon style={{ fontSize: 64, color: '#ff9800' }} />
          <Typography variant="h4" gutterBottom>
            Bookkeeping Services
          </Typography>
          <Typography gutterBottom>
            Steering user behaviors with creative design, data insights & technology.
          </Typography>
        </Box>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '2em', marginLeft: "60rem" }}>
        Bookkeeping Services
      </Button>
    </Box>
  );
};

export default Services;
