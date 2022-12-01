import React from 'react'

const Error = ({errorText}) => {
  return (
    <div>
        <p style={{color : "red", width : "280px"}}>{errorText}</p>
    </div>
  )
}

export default Error