import React from 'react'

import Header from "../Components/Header";
import Body from "../Components/Body";
import Mission from "../Components/Mission";
import Tips from "../Components/Tips";

const Home = (props) => {
     props.setShowBackground(true);

      return (
    <div>
        <Body />
                <div>
                  <Mission />
                </div>
                <div>
                  <Tips />
                </div>
    </div>
  )
}

export default Home
