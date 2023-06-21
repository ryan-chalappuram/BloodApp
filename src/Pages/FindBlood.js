import React, { useState, useContext } from 'react';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
} from '@mui/material';
import './FindBlood.css';
import axios from 'axios';
import ApiContext from '../ApiContext';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const districts = [
  'Alappuzha',
  'Ernakulam',
  'Idukki',
  'Kannur',
  'Kasaragod',
  'Kollam',
  'Kottayam',
  'Kozhikode',
  'Malappuram',
  'Palakkad',
  'Pathanamthitta',
  'Thiruvananthapuram',
  'Thrissur',
  'Wayanad',
];

const BloodRequirementForm = (props) => {
  const apiUrl = useContext(ApiContext);
  props.setShowBackground(false);
  const [bloodGroup, setBloodGroup] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [hospital, setHospital] = useState('');
  const [district, setDistrict] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [unitsRequired, setUnitsRequired] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
        blood_group: bloodGroup,
        name_of_patient: name,
        date_of_donation: formatDate(date),
        donation_venue: hospital,
        district,
        contact_number: contactNumber,
        patient_case: caseDescription,
        no_of_units: unitsRequired,
      };
     

    try {
      const response = await axios.post(`${apiUrl}bloodreq/findblood/`, formData);
      console.log(response.data);
      setShowSnackbar(true);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  const resetForm = () => {
    setBloodGroup('');
    setName('');
    setDate('');
    setHospital('');
    setDistrict('');
    setContactNumber('');
    setUnitsRequired('');
    setCaseDescription('');
  };
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  return (
    <div className='findblood-form-cont'>
      <h1>Blood Requirement</h1>

      <form className='findblood-form' onSubmit={handleSubmit}>
        <FormControl fullWidth margin='normal'>
          <InputLabel htmlFor='blood-group-select'>Blood Group</InputLabel>
          <Select
            label='Blood Group'
            id='blood-group-select'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            {bloodGroups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label='Name of Person'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin='normal'
        />
        <TextField
          fullWidth
          label='Date'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Hospital'
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          required
          margin='normal'
        />
        <FormControl fullWidth margin='normal'>
          <InputLabel htmlFor='district-select'>District</InputLabel>
          <Select
            label='District'
            id='district-select'
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label='Contact Number'
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          margin='normal'
        /> 
        <TextField
        fullWidth
        label='Case'
        value={caseDescription}
        onChange={(e) => setCaseDescription(e.target.value)}
        required
        margin='normal'
      />
        <TextField
          fullWidth
          label='No of units required'
          type='number'
          value={unitsRequired}
          onChange={(e) => setUnitsRequired(e.target.value)}
          required
          margin='normal'
        />
       
        <Button variant='contained' type='submit' sx={{ backgroundColor: 'black' }}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000} 
        onClose={() => setShowSnackbar(false)} 
        message='Form submitted successfully.Admin Verification Pending.' // Message to display in the Snackbar
      />
    </div>
  );
};

export default BloodRequirementForm;
