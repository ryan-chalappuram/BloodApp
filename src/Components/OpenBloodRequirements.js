import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Collapse, Box } from '@mui/material';
import ApiContext from '../ApiContext';
import { hover } from '@testing-library/user-event/dist/hover';
import './OpenBloodRequirements.css';

const OpenBloodRequirements = () => {
  const [bloodRequirements, setBloodRequirements] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const apiUrl = useContext(ApiContext);

  useEffect(() => {
    fetchBloodRequirements();
  }, []);

  const fetchBloodRequirements = async () => {
    try {
      const response = await axios.get(`${apiUrl}bloodreq/liverequirements/`);
      setBloodRequirements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRowClick = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  return (
    <div className='open-con'>
      <h2>Open Blood Requirements</h2>
      {bloodRequirements.length === 0 ? (
        <p>No blood requirements.</p>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Blood Group</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bloodRequirements.map((requirement, index) => (
                <React.Fragment key={requirement.id}>
                  <TableRow onClick={() => handleRowClick(index)} style={{ cursor: 'pointer' }}>
                    <TableCell>{requirement.blood_group}</TableCell>
                    <TableCell>{requirement.date_of_donation}</TableCell>
                    <TableCell>{requirement.name_of_patient}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Collapse in={expandedRow === index} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }}>
                          <Typography variant="subtitle1">Details:</Typography>
                          <Typography variant="body1">
                            Name of Patient: {requirement.name_of_patient}<br />
                            Donation Venue: {requirement.donation_venue}<br />
                            District: {requirement.district}<br />
                            Contact Number: {requirement.contact_number}<br />
                            Patient Case: {requirement.patient_case}<br />
                            Number of Units: {requirement.no_of_units}<br />
                            Date of Request: {requirement.date_of_request}
                          </Typography>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default OpenBloodRequirements;
