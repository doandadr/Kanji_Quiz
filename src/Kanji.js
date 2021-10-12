import React from 'react'

const Kanji = ({ currentVal, totalQs, kanji }) => {
  return (
    <div className='kanji'>
      <div className='kanji__info'>
        <h3>
          <span className='kanji__current'>{currentVal + 1}</span>/
          <span className='kanji__total'>{totalQs}</span>
        </h3>
      </div>
      <h2 className='kanji__character'>{kanji}</h2>
    </div>
  )
}

export default Kanji
