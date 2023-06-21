import React, { useState , useContext} from "react";
import axios from "axios";
import ApiContext from '../ApiContext';
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
  
 const apiUrl = useContext(ApiContext);
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
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const formData = {
          first_name:firstName,
          last_name:lastName,
          phone_number:phoneNumber,
          address:address,
          district:district,
          pincode:pincode,
          dateofbirth:formatDate(age),
          blood_group:bloodGroup,
          state:state,
          lastDonatedDate:formatDate(lastDonatedDate),
        };

        const accessToken = localStorage.getItem("accessToken");

        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await axios.post(
          `${apiUrl}users/profileupdate/`, 
          formData,
          { headers }
        );

        console.log(response.data); // Handle successful response from the backend

        // Set the status code
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
    // if (!lastDonatedDate || lastDonatedDate.isBefore(currentDate, "day")) {
    //   errors.lastDonatedDate =
    //     "Last donated date is required and should be in the future";
    // }

    if (lastDonatedDate.trim() === "") {
      errors.lastDonatedDate = "Last donated date is required";
    } else if (dayjs(formatDate(lastDonatedDate)).isAfter(currentDate)) {
      errors.lastDonatedDate = "Last donated date cannot be in the future";
    }


    return errors;
  };

  const bloodgroup = [
    {
      value: "O+",
      label: "O+",
    },
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "AB-",
      label: "AB-",
    },
    {
      value: "O-",
      label: "O-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "B-",
      label: "B-",
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
      value: "Alappuzha",
      label: "Alappuzha",
    },
    {
      value: "Idukki",
      label: "Idukki",
    },
    {
      value: "Kannur",
      label: "Kannur",
    },
    {
      value: "Kasaragod",
      label: "Kasaragod",
    },
    {
      value: "Kollam",
      label: "Kollam",
    },
    {
      value: "Kottayam",
      label: "Kottayam",
    },
    {
      value: "Kozhikode",
      label: "Kozhikode",
    },
    {
      value: "Ernakulam",
      label: "Ernakulam",
    },

    {
      value: "Malappuram",
      label: "Malappuram",
    },
    {
      value: "Thrissur",
      label: "Thrissur",
    },
    {
      value: "Palakkad",
      label: "Palakkad",
    },
    {
      value: "Pathanamthitta",
      label: "Pathanamthitta",
    },
    {
      value: "Thiruvananthapuram",
      label: "Thiruvananthapuram",
    },
    {
      value: "Wayanad",
      label: "Wayanad",
    },
  ];

  return (
    <>
      <Container maxWidth="sm" className="reg_cont">
        <div
          className="header2"
          style={{
            padding: "0 27px 0 37px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography variant="h4" gutterBottom className="header_cont">
            Register As Donor
          </Typography>
        </div>
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
                InputLabelProps={{shrink: true,
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
                label="Last Donated"
                variant="outlined"
                color="secondary"
                // helperText="Last Donation"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={lastDonatedDate}
                onChange={(e) => setLastDonatedDate(e.target.value)}
                required
                error={!!formErrors.lastDonatedDate}
                helperText={formErrors.lastDonatedDate}
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
    </>
  );
};

export default RegisterForm;