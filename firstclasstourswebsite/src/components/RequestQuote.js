import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import Header from './HeaderNavBar';
import Footer from './Footer';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  border: "0px solid #000",
  fontSize: "16px",
  p: 4
};
const RequestQuote = () => {

  return (
      <div>
      <Header />
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h4">
            Request A Quote
          </Typography>
          <form>
            <FormControl fullWidth sx={{ marginBottom: "10px", fontSize: "10px" }}>
              <InputLabel htmlFor="fname">First name</InputLabel>
              <OutlinedInput id="fname" label="First name" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="lname">Last name</InputLabel>
              <OutlinedInput id="lname" label="Last name" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" label="Email" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="phone number">Phone Number</InputLabel>
              <OutlinedInput id="phone" label="phone number" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="destination">Destination</InputLabel>
              <OutlinedInput id="destination" label="destination" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="number">Participant Number</InputLabel>
              <OutlinedInput id="participant" label="number of participants" />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <TextField
                id="outlined-multiline-static"
                label="Additional Questions / Comments"
                multiline
                rows={10}
              />
            </FormControl>
          </form>
        </Box>
        <Footer />
        </div>
  );
};
export default RequestQuote;