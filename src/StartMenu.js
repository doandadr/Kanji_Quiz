import React, { useState, useEffect } from 'react'
import data from './kanji-jouyou.json'
import { shuffleArray } from './shuffleArray'

const StartMenu = ({ initialize }) => {
  const [grade, setGrade] = useState(0)
  const [jlpt, setJlpt] = useState(0)
  // const [number, setNumber] = useState(0)
  const [grades, setGrades] = useState([])
  const [jlptLevels, setJlptLevels] = useState(Object.keys(data))
  const [kanjiList, setKanjiList] = useState([])

  useEffect(() => {
    setGrades([1, 2, 3, 4, 5, 6, 8])
    setJlptLevels([1, 2, 3, 4, 5])
  }, [])

  useEffect(() => {
    setKanjiList(
      Object.keys(data).filter((kanji) => {
        return (
          (grade === 0 || grade === data[kanji].grade) &&
          (jlpt === 0 || jlpt === data[kanji].jlpt_new)
        )
      })
    )
  }, [grade, jlpt])

  const handleGradeChange = (e) => {
    setGrade(parseInt(e.target.value))
  }
  const handleJLPTChange = (e) => {
    setJlpt(parseInt(e.target.value))
  }
  // const handleNumberChange = (e) => {
  //   setNumber(e.target.value)
  //   if (number > kanjiList.length) {
  //     alert('number cannot exceed maximum')
  //   }
  //   if (number <= 0) {
  //     alert('number must be at least 1')
  //   }
  // }

  const setupQuiz = () => {
    initialize(shuffleArray(kanjiList))
  }

  return (
    <div className='start'>
      <div className='start__container'>
        <div className='start__select'>
          <select value={grade} onChange={handleGradeChange}>
            <option value='0'>Select Grade</option>
            {grades.map((g, index) => {
              if (kanjiList.some((k) => data[k].grade === g)) {
                return (
                  <option value={`${g}`} key={index}>
                    {`Grade ${g} (${
                      kanjiList.filter((k) => data[k].grade === g).length
                    })`}{' '}
                  </option>
                )
                return <></>
              }
            })}
          </select>
        </div>
        <div className='start__select'>
          <select value={jlpt} onChange={handleJLPTChange}>
            <option value='0'>Select JLPT Level</option>
            {jlptLevels.map((j, index) => {
              if (kanjiList.some((k) => data[k].jlpt_new === j)) {
                return (
                  <option value={`${j}`} key={index}>
                    {`JLPT N${j} (${
                      kanjiList.filter((k) => data[k].jlpt_new === j).length
                    })`}
                  </option>
                )
                return <></>
              }
            })}
          </select>
        </div>
        {/* <div className='start__number'>
          <p>Number of kanji:</p>
          <input type='number' onChange={handleNumberChange} />
        </div> */}
        <button
          type='submit'
          className='start__btn'
          onClick={() => setupQuiz()}
        >
          Press to Start!
        </button>
      </div>
    </div>
  )
}

export default StartMenu
