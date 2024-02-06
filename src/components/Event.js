import React from 'react'

function Event() {

    const handleClick = () => {
        alert("Berhasil!!!");
    };
    
  return (
    <div>
        <button onClick={handleClick}>Click Her</button>
        </div>
  )
}

export default Event;