import React, { useState } from "react";
import axios from "axios";
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
import "./Register.css";
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
  const [statusCode, setStatusCode] = useState(null);
  const currentDate = dayjs();

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const formData = {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          address: address,
          district: district,
          pincode: pincode,
          dateofbirth: formatDate(age),
          blood_group: bloodGroup,
          state: state,
          lastDonatedDate: formatDate(lastDonatedDate),
        };

        const accessToken = localStorage.getItem("accessToken");

        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await axios.post(
          "https://04e3-2405-201-f001-a1c4-34a3-586d-241b-1f81.ngrok-free.app/users/profileupdate/",
          formData,
          { headers }
        );

        console.log(response.data); // Handle successful response from the backend
        console.log(response.status);

        // Clear form fields and show success message
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAddress("");
        setAge("");
        setBloodGroup("");
        setDistrict("");
        setState("");
        setPincode("");
        setLastDonatedDate("");
        setFormErrors({});
      } catch (error) {
        console.error("Error:", error);

        // Set the status code
        setStatusCode(error.response.status);

        // Handle error response from the backend
        // ...
      }
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
    } else if (currentDate.diff(formatDate(age), "year") < 18) {
      errors.age = "Age should be 18 years or above";
    }

    // Validate blood group
    if (bloodGroup === "") {
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
    if (lastDonatedDate.trim() === "") {
      errors.lastDonatedDate = "Last donated date is required";
    } else if (dayjs(formatDate(lastDonatedDate)).isAfter(currentDate)) {
      errors.lastDonatedDate = "Last donated date cannot be in the future";
    }

    return errors;
  };

  return (
    <Container maxWidth="xs" className="register-container">
      <div className="register-content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TaskAltIcon sx={{ fontSize: 60, color: "#f44336" }} />
          <Typography component="h1" variant="h5" mt={2}>
            Register as a Donor
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} className="register-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={formErrors.firstName !== undefined}
                helperText={formErrors.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={formErrors.lastName !== undefined}
                helperText={formErrors.lastName}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={formErrors.phoneNumber !== undefined}
                helperText={formErrors.phoneNumber}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={formErrors.address !== undefined}
                helperText={formErrors.address}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Age"
                name="age"
                type="date"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                InputLabelProps={{ shrink: true }}
                error={formErrors.age !== undefined}
                helperText={formErrors.age}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                select
                label="Blood Group"
                name="bloodGroup"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                error={formErrors.bloodGroup !== undefined}
                helperText={formErrors.bloodGroup}
                required
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="District"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                error={formErrors.district !== undefined}
                helperText={formErrors.district}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="State"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                error={formErrors.state !== undefined}
                helperText={formErrors.state}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Pincode"
                name="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                error={formErrors.pincode !== undefined}
                helperText={formErrors.pincode}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Donated Date"
                name="lastDonatedDate"
                type="date"
                value={lastDonatedDate}
                onChange={(e) => setLastDonatedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                error={formErrors.lastDonatedDate !== undefined}
                helperText={formErrors.lastDonatedDate}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="register-submit-button"
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;
