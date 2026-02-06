import React from 'react'
import Video from './video';
import Recomended from './Recomended';
import "../Stylesheets/PlayVideo.css"

function PlayVideo() {
  return (
   <>
   <div className='playvideo'>
    <Video/>
    <Recomended />
   </div>
   </>
  )
}

export default PlayVideo