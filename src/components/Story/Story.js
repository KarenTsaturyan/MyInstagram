import React, { useState } from 'react'
import StoryPage from '../StoryPage/StoryPage'

function Story({img, name, duration, type}) {
  let [bool, setBool] = useState(false);
  const clickHandler = () => {
    setBool(!bool);
  };
  return (
    <div>
    <div className="status-card">
        <div onClick={clickHandler} className="profile-pic"><img src={img} alt=""/></div>
        <p className="username">{name}</p>
    </div>
  {
    bool && 
      <StoryPage bool={bool} img={img} setBool={setBool} type={type} duration={duration}/>
  }
  </div>
  )
}

export default Story