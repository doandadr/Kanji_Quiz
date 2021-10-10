import React from 'react'

const Kanji = ({ currentVal, totalQs, kanji }) => {
  return (
    <div className='kanji-container'>
      <div className='kanji-info'>
        <h3>
          <span className='current-kanji'>{currentVal + 1}</span>/
          <span className='total-kanji'>{totalQs}</span>
        </h3>
      </div>
      <h2 className='kanji'>{kanji}</h2>
    </div>
  )
}

export default Kanji
