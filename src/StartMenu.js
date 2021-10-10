import React from 'react'

const StartMenu = ({ initialize }) => {
  return (
    <div className='start-menu'>
      <button className='start-btn' onClick={() => initialize()}>
        Press to Start!
      </button>
    </div>
  )
}

export default StartMenu
