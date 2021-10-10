import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { shuffleArray } from './shuffleArray'
import { getRandom } from './getRandom'

import data from './kanji-jouyou.json'

function App() {
  // total kanji : 2136

  // let count = 0
  // let arr = [0, 0, 0, 0, 0, 0]
  // let jlpt
  // for (let key in data) {
  //   // console.log(data[key].jlpt_new)
  //   jlpt = data[key].jlpt_new
  //   if (jlpt) {
  //     arr[jlpt - 1] += 1
  //   } else {
  //     arr[5] += 1
  //   }
  // }
  // console.log(arr)
  // const objectKeys = Object.keys(data)
  // console.log(objectKeys)
  // const meanings = objectKeys.map((kanji) => {
  //   return data[kanji].meanings[0]
  // })
  // console.log(meanings)
  // const jlpt_1 = Object.keys(data).filter((kanji) => {
  //   return data[kanji].jlpt_new === 1
  // })
  // console.log(jlpt_1)

  const [isStart, setIsStart] = useState(false)
  const [currentQs, setCurrentQs] = useState(0)
  const [totalQs, setTotalQs] = useState(2136)
  const [kanji, setKanji] = useState('懐')
  const [wrongCount, setWrongCount] = useState(1)
  const [rightCount, setRightCount] = useState(1)
  const [possibleAns, setPossibleAns] = useState(['a', 'b', 'c', 'd'])
  const [isCorrect, setIsCorrect] = useState(false)
  const [kanjiList, setKanjiList] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [currentVal, setCurrentVal] = useState(0)

  // setKanjiList(shuffledKanji)

  const handleAnswer = (e) => {
    // const answer = e.target.innerText
    // if (answer === currentAnswer) {
    // } else {
    // }
    // setCurrentVal(currentVal + 1)
  }
  const initialize = () => {
    const shuffledKanji = shuffleArray(Object.keys(data))
    setCurrentVal(0)
    setKanjiList(shuffledKanji)
    setIsStart(true)
    setCurrentQs(1)
    setTotalQs(shuffledKanji.length)
    setKanji(shuffledKanji[currentVal])
    setCurrentAnswer(data[shuffledKanji[currentVal]].meanings[0])
    setWrongCount(0)
    setRightCount(0)
    setPossibleAns(
      shuffleArray([
        ...getRandom(shuffledKanji, 3),
        shuffledKanji[currentVal],
      ]).map((key) => data[key].meanings[0])
    )
  }

  const handleCheck = () => {
    console.log(isStart)
    // console.log(kanjiList)
    console.log(kanji)
    console.log(wrongCount)
    console.log(rightCount)
    console.log(possibleAns)
    console.log(isCorrect)
    console.log(currentAnswer)
    console.log(currentVal)
  }

  if (!isStart) {
    return (
      <>
        <div className='start-menu'>
          <button className='start-btn' onClick={() => initialize()}>
            Press to Start!
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <header>
        <button onClick={handleCheck}>CHECK</button>
        <h1>Kanji Quiz</h1>
      </header>
      <main>
        <div className='container'>
          <div className='quiz-container'>
            <div className='kanji-container'>
              <div className='kanji-info'>
                <h3>
                  <span className='current-kanji'>{currentQs}</span>/
                  <span className='total-kanji'>{totalQs}</span>
                </h3>
              </div>
              <h2 className='kanji'>{kanji}</h2>
            </div>
            <div className='score-bar'>
              <div className='wrong'>{wrongCount}</div>
              <div className='right'>{rightCount}</div>
            </div>
            <div className='options-container'>
              <button
                type='button'
                className='option'
                onClick={(e) => handleAnswer(e)}
              >
                {possibleAns[0]}
              </button>
              <button type='button' className='option'>
                {possibleAns[1]}
              </button>
              <button type='button' className='option'>
                {possibleAns[2]}
              </button>
              <button type='button' className='option'>
                {possibleAns[3]}
              </button>
            </div>
          </div>
          <div className='feedback'>
            <p>
              {(rightCount || wrongCount) && isCorrect
                ? 'Answer is Correct  :D'
                : 'Answer is Incorrect :('}
            </p>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App

// https://www.smashingmagazine.com/2014/07/bem-methodology-for-small-projects/
// https://www.conventionalcommits.org/en/v1.0.0/
