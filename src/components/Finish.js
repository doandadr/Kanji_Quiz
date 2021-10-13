import React from 'react'

const Finish = ({ rightCount, wrongCount, time }) => {
  const getTime = (time) => {
    return `${('0' + Math.floor((time / 60000) % 60)).slice(-2)}.${(
      '0' + Math.floor((time / 1000) % 60)
    ).slice(-2)}`
  }

  return (
    <div className='finished'>
      <h2>
        Your score is {rightCount} out of {rightCount + wrongCount}
      </h2>
      <h2>Time : {getTime(time)}</h2>
    </div>
  )
}

export default Finish
