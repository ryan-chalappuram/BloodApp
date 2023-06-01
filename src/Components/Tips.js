import React from 'react'
import './Tips.css'

const Tips = () => {
  return (
    
   
    <div className='Tips_container'>
      <h2>Tips</h2>
      <div className='card_cont'>
      <div className='card_1'>
           <h4>The Day Before</h4> 
           <ul className='1_ul'>
            <li>Have an iron-rich diet such as beans, spinach or meat, poultry. </li>
            <li>Have a proper sleep of at least 8 hours. </li>
            <li>Include more liquids in your diet.</li>

           </ul>
      </div>
      <div className='card_2'>
           <h4>On donation Day </h4> 
           <ul className='2_ul'>
           <li>Do carry your identify identification forms e.g. driver’s license</li>
            <li>Drink 2 cups of water before donating blood</li>
            <li>Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation</li>
           

           </ul>
      </div>
      <div className='card_3'>
           <h4>After the Donation </h4> 
           <ul className='3_ul'>
           <li>Reward yourself with a snack as refreshment immediately.</li>
            <li>Drink more liquids over a period of 24 hours</li>
            <li>Don’t do vigorous workout & give your body rest</li>

           </ul>
      </div>
      </div>

    </div>
    
   
  )
}

export default Tips
