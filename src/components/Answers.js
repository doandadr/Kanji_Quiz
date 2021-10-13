import React from 'react'

const Answers = ({ possibleAns, handleAnswer }) => {
  return (
    <div className='answers'>
      <button
        type='button'
        className='answers__option'
        onClick={(e) => handleAnswer(e)}
      >
        {possibleAns[0]}
      </button>
      <button
        type='button'
        className='answers__option'
        onClick={(e) => handleAnswer(e)}
      >
        {possibleAns[1]}
      </button>
      <button
        type='button'
        className='answers__option'
        onClick={(e) => handleAnswer(e)}
      >
        {possibleAns[2]}
      </button>
      <button
        type='button'
        className='answers__option'
        onClick={(e) => handleAnswer(e)}
      >
        {possibleAns[3]}
      </button>
    </div>
  )
}

export default Answers
