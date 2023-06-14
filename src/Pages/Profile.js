import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = (props) => {
    props.setShowBackground(false);

  const profileData = {
    "Full Name": "John Doe",
    Email: "noufub@gmail.com",
    District: "Tvm",
    "Phone Number": "9999",
    Pincode: "679303",
    Age: "14",
    "Blood Group": "O+ve",
    Address: "Kundannoor",
    "Last Donation Date": "miniyaann",
  };

  const entries = Object.entries(profileData);
  const maxLength = Math.max(...entries.map(([key]) => key.length));


  // const [profile, setProfile] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating an API call to fetch the profile data
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await fetch(`https://api.example.com/profiles/${userId}`);
  //       const data = await response.json();
  //       setProfile(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //     }
  //   };

  //   fetchProfile();
  // }, [userId]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!profile) {
  //   return <div>Profile not found.</div>;
  // }

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

        <>
      {entries.map(([key, value],index) => (
        <>
      <div className="flex" key={key}>
        <div className="key" style={{ width: `${maxLength}ch` }}>
          {key}
        </div>
        <div className="value">{value}</div>
      </div>
      {index !== entries.length - 1 && (
          <hr className="test" />
        )}
        </>
        ))}
      </>

        <div className="container"></div>
      </div>
    </div>
  );
};

export default Profile;

