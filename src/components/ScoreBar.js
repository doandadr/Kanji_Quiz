import React from 'react'

const ScoreBar = ({ wrongCount, rightCount }) => {
  return (
    <div
      className='score'
      style={{
        gridTemplateRows: `${wrongCount || '1'}fr ${rightCount || '1'}fr`,
      }}
    >
      <div className='score__wrong'>
        <h3>{wrongCount}</h3>
      </div>
      <div className='score__right'>
        <h3>{rightCount}</h3>
      </div>
    </div>
  )
}

export default ScoreBar
