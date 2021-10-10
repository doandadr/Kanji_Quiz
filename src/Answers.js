import React from 'react'

const Answers = ({ possibleAns, handleAnswer }) => {
  return (
    <div className='options-container'>
      <button type='button' className='option' onClick={(e) => handleAnswer(e)}>
        {possibleAns[0]}
      </button>
      <button type='button' className='option' onClick={(e) => handleAnswer(e)}>
        {possibleAns[1]}
      </button>
      <button type='button' className='option' onClick={(e) => handleAnswer(e)}>
        {possibleAns[2]}
      </button>
      <button type='button' className='option' onClick={(e) => handleAnswer(e)}>
        {possibleAns[3]}
      </button>
    </div>
  )
}

export default Answers
