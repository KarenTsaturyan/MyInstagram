import React from "react";
import Stories from 'react-insta-stories';

function StoryPage({ bool, setBool, img, duration}) {
    const stories = [
      {
        type: 'image',
        url:img,
        duration: duration
      },
    ];
  
    const onAllStoriesEndHandler = () => {
    //   console.log("stories ended");
      setBool(false);
    };
  
    return (
    <div style={{position:'absolute', width:'200px', height:'600px', top: '150px',
    left: '0'}}>
      <Stories
        width="400px"
        height="600px"
        loop={false}
        stories={stories}
        onAllStoriesEnd={onAllStoriesEndHandler}
      />
    </div>
    );
  }

  export default StoryPage