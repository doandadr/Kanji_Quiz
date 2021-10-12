import React from 'react'

const Timer = ({ time }) => {
  return (
    <div className='timer'>
      <span className='digits'>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className='digits'>
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
      {/* <span className='digits mili-sec'>
        {('0' + ((time / 10) % 100)).slice(-2)}
      </span> */}
    </div>
  )
}

export default Timer

// https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
