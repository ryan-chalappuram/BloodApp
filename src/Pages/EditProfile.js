import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MenuItem from "@mui/material/MenuItem";
import './Register.css'
import dayjs from "dayjs";

const RegisterForm = (props) => {
    props.setShowBackground(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [lastDonatedDate, setLastDonatedDate] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const currentDate = dayjs();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      console.log(
        firstName,
        lastName,
        phoneNumber,
        address,
        age,
        bloodGroup,
        district,
        state,
        pincode,
        lastDonatedDate
      );
      // Send data to backend or perform further actions
         // Send data to backend or perform further actions
      // Example:
      // fetch("/api/register", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("Success:", data);
      //     // Handle success response from the backend
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //     // Handle error response from the backend
      //   });
      
    } else {
      // Form is invalid, update formErrors state
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (firstName.trim() === "") {
      errors.firstName = "First name is required";
    }

    // Validate last name
    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }

    // Validate phone number
    if (phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone number is required";
    }

    // Validate address
    if (address.trim() === "") {
      errors.address = "Address is required";
    }

    // Validate age
    if (age.trim() === "") {
      errors.age = "Age is required";
    }

    // Validate blood group
    if (bloodGroup.trim() === "") {
      errors.bloodGroup = "Blood group is required";
    }

    // Validate district
    if (district.trim() === "") {
      errors.district = "District is required";
    }

    // Validate state
    if (state.trim() === "") {
      errors.state = "State is required";
    }

    // Validate pincode
    if (pincode.trim() === "") {
      errors.pincode = "Pincode is required";
    }

    // Validate last donated date
    if (!lastDonatedDate || lastDonatedDate.isBefore(currentDate, "day")) {
      errors.lastDonatedDate = "Last donated date is required and should be in the future";
    }
    

    return errors;
  };

  

  const bloodgroup = [
    {
      value: "O positive",
      label: "O +",
    },
    {
      value: "A positive",
      label: "A +",
    },
    {
      value: "AB positive",
      label: "AB +",
    },
    {
      value: "O negative",
      label: "O -",
    },
  ];

  const state1 = [
    {
      value: "Kerala",
      label: "Kerala",
    },
  ];

  const district1 = [
    {
      value: "Ernakulam",
      label: "Ernakulam",
    },
    {
      value: "Kozhikode",
      label: "Kozhikode",
    },
    {
      value: "Malappuram",
      label: "Malappuram",
    },
    {
      value: "Thrissur",
      label: "Thrissur",
    },
  ];

  return (
    <div className="login_cont">
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom className="header2">
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              error={!!formErrors.phoneNumber}
              helperText={formErrors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              error={!!formErrors.address}
              helperText={formErrors.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              fullWidth
              type="date"
              // label ="Last Donated"
              variant="outlined"
              color="secondary"
              // helperText="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
              error={!!formErrors.age}
              // helperText={formErrors.age}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Blood Group"
              variant="outlined"
              fullWidth
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
              error={!!formErrors.bloodGroup}
              helperText={formErrors.bloodGroup}
            >
              {bloodgroup.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="District"
              variant="outlined"
              fullWidth
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
              error={!!formErrors.district}
              helperText={formErrors.district}
            >
              {district1.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="State"
              variant="outlined"
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              error={!!formErrors.state}
              helperText={formErrors.state}
            >
              {state1.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pincode"
              variant="outlined"
              fullWidth
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
              error={!!formErrors.pincode}
              helperText={formErrors.pincode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>


            <TextField
            type="date"
            label ="Last Donated"
            variant="outlined"
            color="secondary"
            // helperText="Last Donation"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            />

            
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            variant="outlined"
            startIcon={<TaskAltIcon />}
            style={{ marginTop: "1rem" }}
            color="secondary"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
    </div>
  );
};

export default RegisterForm;
