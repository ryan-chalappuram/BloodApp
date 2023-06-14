import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = (props) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfileData();
    props.setShowBackground(false);
  }, []);

  const fetchProfileData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      

      const response = await axios.get(
        "https://04e3-2405-201-f001-a1c4-34a3-586d-241b-1f81.ngrok-free.app/users/getprofiledata/",
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
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>
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
