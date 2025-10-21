import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';

export default function FloatingActionButton() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }} style={{position: 'fixed', bottom: 16, right: 16, zIndex: 1000}}>
        <Fab style={{backgroundColor: "#33A8DA"}} aria-label="edit">
          <HelpIcon style={{fontSize: "2rem", color: 'white'}}/>
        </Fab>
      </Box>
    );
  }