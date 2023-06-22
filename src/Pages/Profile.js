import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import "./Profile.css";
import ApiContext from '../ApiContext';
import errorimg from "../Images/errorimg.png"
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

const Profile = (props) => {
  const apiUrl = useContext(ApiContext);
  const [profileData, setProfileData] = useState(null);
  const [telegramverif, setTelegramVerif] = useState(true);
  const [telegramveriflink, setTelegramVerifLink] = useState("");
  
  useEffect(() => {
    fetchProfileData();
    getTelegramData();
    props.setShowBackground(false);
  }, []);
  
  const getTelegramData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(
        `${apiUrl}telebot/userdata/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      );

      if (response.status === 200) {
        const teledata = response.data;
        console.log(teledata);
        const verif = teledata.is_telegram_verified;
        
        const verif_link = `https://${teledata.telegram_verification_link}`
        setTelegramVerif(verif);
        setTelegramVerifLink(verif_link);
        console.log(verif_link);
        
       
        // Process the retrieved data here
      } else {
        console.error("Failed to fetch Telegram data");
      }
    } catch (error) {
      console.error("Error while fetching Telegram data:", error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.get(
        `${apiUrl}users/getprofiledata/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setProfileData(data);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error while fetching profile data:", error);
    }
  };

  const renderProfileDetails = () => {
    if (profileData) {
      const entries = Object.entries(profileData);
      const maxLength = Math.max(...entries.map(([key]) => key.length));

      return entries.map(([key, value], index) => (
        <div className="flex" key={key}>
          <div className="key" style={{ width: `${maxLength}ch` }}>
            {key}
          </div>
          <div className="value">{value}</div>
        </div>
      ));
    }
    return null;
  };


  const renderTelegramVerificationLink = () => {

    console.log(telegramveriflink)

    
      return (
        <div className="tele-verif-cont">
          <div className="tele-dets">
            <img src={errorimg} alt="Error" />
            <h4>Telegram not verified</h4>
            <a href={telegramveriflink} target="_blank" rel="noopener noreferrer"><h4
              className="verify-link"
              // onClick={() => window.open(telegramveriflink, "_blank")}
            >
              Click Here
            </h4></a>
          </div>
        </div>
      );
    
    
  };
  
  

  return (
    <div className="overall">
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-details">
            <img
              src="https://th.bing.com/th/id/OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp?pid=ImgDet&rs=1"
              alt="Profile Image"
              className="profile-image"
            />
            <div className="profile-name">
              <h2> Name </h2>
              {/* Additional profile details */}
            </div>
          </div>
          <div className="edit-profile">
           <Link to= '/edit'>
              <button className="edit-button">Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
      {  !telegramverif &&
        renderTelegramVerificationLink() }
      </div>
      <div className="card1">
        <h5 className="card-title">About</h5>
       
        {renderProfileDetails()}
       

        <div className="container"></div>
      </div>
    </div>
  );
};

export default Profile;
