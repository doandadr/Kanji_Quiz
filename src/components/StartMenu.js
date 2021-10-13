import React, { useState, useEffect } from 'react'
import data from '../utils/kanji-jouyou.json'
import { shuffleArray } from '../utils/shuffleArray'

const StartMenu = ({ initialize }) => {
  const [grade, setGrade] = useState(0)
  const [jlpt, setJlpt] = useState(0)
  const [number, setNumber] = useState(0)
  const [grades, setGrades] = useState([])
  const [jlptLevels, setJlptLevels] = useState([])
  const [kanjiList, setKanjiList] = useState([])

  useEffect(() => {
    setGrades([1, 2, 3, 4, 5, 6, 8])
    setJlptLevels([5, 4, 3, 2, 1])
    setNumber(100)
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
  const handleNumberChange = (e) => {
    const num = e.target.value
    const parsedNum = parseInt(num)
    setNumber(parsedNum)
  }
  const handleNumberBlur = (e) => {
    const num = e.target.value
    const parsedNum = parseInt(num)
    if (!parsedNum || !num) {
      setNumber(4)
    } else if (parsedNum > kanjiList.length) {
      setNumber(kanjiList.length)
    } else if (parsedNum < 4) {
      setNumber(4)
    } else {
      setNumber(parsedNum)
    }
  }

  const setupQuiz = () => {
    initialize(shuffleArray(kanjiList).slice(0, number ? number : 4))
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
              }
              return <></>
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
              }
              return <></>
            })}
          </select>
        </div>
        <div className='start__number'>
          <p>Number of kanji:</p>
          <input
            type='number'
            value={number}
            onChange={handleNumberChange}
            onBlur={handleNumberBlur}
          />
        </div>
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
