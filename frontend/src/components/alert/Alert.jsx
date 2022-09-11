import React, { useState } from 'react'
import "./_alert.scss";
const Alert = ({ message }) => {

  const [errorMessage, setErrorMessage] = useState(message);

  function onClose() {
    setErrorMessage(null);
  }

  return (
    <>
      {errorMessage &&
        <div className='alert'>
          <span onClick={onClose} className="closebtn">&times;</span>
          { errorMessage }
        </div>
      }
    </>
  )
}

export default Alert;
