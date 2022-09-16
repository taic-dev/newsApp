import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Footer = () => {
    const [buttonColor, setbuttonColor] = React.useState(0);

    return (
        <Box>
        <BottomNavigation
            showLabels
            value={buttonColor}
            onChange={(event, newValue) => {
                setbuttonColor(newValue);
            }}
        >
            <BottomNavigationAction label="Weather" icon={<WbSunnyIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </Box>
  );
}

export default Footer
