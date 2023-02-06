import React from 'react'
import { useNavigate } from 'react-router-dom'


const Errorpage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
   navigate("/");
  }

  return (
    <div>
      <h3>Error</h3>
    <button onClick={handleClick}>Click back to Homepage</button>
    </div>
  )
}

export default Errorpage
