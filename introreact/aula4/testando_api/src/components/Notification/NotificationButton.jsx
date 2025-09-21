import React from 'react'

function NotificationButton({action,nameAction}) {
  return (
    <button onClick={action} >{nameAction}</button>
  )
}

export default NotificationButton
