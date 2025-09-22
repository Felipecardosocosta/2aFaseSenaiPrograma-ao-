import React from 'react'

function NotificationText({content,imgTest=false}) {
  return (
    <>
      {imgTest && <img  src={imgTest} alt=""/>}
      <h3>{content}</h3>
    </>
  )
}

export default NotificationText
