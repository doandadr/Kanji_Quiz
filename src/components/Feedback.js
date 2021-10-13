import React from 'react'

const Feedback = ({ isCorrect }) => {
  return (
    <div className='feedback'>
      <p>{isCorrect ? 'Answer is Correct' : 'Answer is Incorrect'}</p>
    </div>
  )
}

export default Feedback
