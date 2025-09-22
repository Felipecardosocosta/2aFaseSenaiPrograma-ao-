import React from 'react'

function NotificationText({content,imgTest=false}) {
  return (
    <>
      <h3>{content}</h3>
      {imgTest && <img  src={imgTest} alt=""/>}
    </>
  )
}

export default NotificationText
