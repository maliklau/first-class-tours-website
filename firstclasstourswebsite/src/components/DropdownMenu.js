import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="dropdown-menu">
      <ul style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#1B6183',
        listStyle: 'none',
        padding: '10px',
        margin: 0,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        fontSize: '12px',
        width: 'max-content',
        zIndex: 1000,
    }}
    className="dropdown">
        <MenuItem><a href="washingtondc" style={styles.navLink}>Washington DC</a></MenuItem>
        <MenuItem><a href="newyorkcity" style={styles.navLink}>New York City</a></MenuItem>
        <MenuItem><a href="mack" style={styles.navLink}>Mackinac Island</a></MenuItem>
        <MenuItem><a href="custom" style={styles.navLink}>Custom Tours</a></MenuItem>
        </ul>
    </div>
  );
};

const styles = {
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        margin: 0
    }
};

export default DropdownMenu;