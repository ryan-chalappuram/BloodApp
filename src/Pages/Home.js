import React from 'react'

import Header from "../Components/Header";
import Body from "../Components/Body";
import Mission from "../Components/Mission";
import Tips from "../Components/Tips";
import OpenBloodRequirements from '../Components/OpenBloodRequirements';

const Home = (props) => {
  
     props.setShowBackground(true);
     const accessToken = localStorage.getItem('accessToken');
      return (
    <div>
        <Body />
                <div>
                  <Mission />
                </div>

                <OpenBloodRequirements />
                <div>
                  <Tips />
                </div>
                
    </div>
  )
}

export default Home
