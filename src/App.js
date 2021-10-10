import React from 'react'
import { useState } from 'react'
import { shuffleArray } from './shuffleArray'
import { getRandom } from './getRandom'

import data from './kanji-jouyou.json'

function App() {
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

  const handleAnswer = (e) => {
    const answer = e.target.innerText
    if (answer === currentAnswer) {
      // logic for correct
      setIsCorrect(true)
      setRightCount(rightCount + 1)
    } else {
      // logic for incorrect
      setIsCorrect(false)
      setWrongCount(wrongCount + 1)
    }
    setKanji(kanjiList[currentVal + 1])
    setCurrentAnswer(data[kanjiList[currentVal + 1]].meanings[0])
    setPossibleAns(
      shuffleArray([...getRandom(kanjiList, 3), kanjiList[currentVal + 1]]).map(
        (key) => data[key].meanings[0]
      )
    )
    setCurrentQs(currentQs + 1)
    setCurrentVal(currentVal + 1)
  }
  const initialize = () => {
    const shuffledKanji = shuffleArray(Object.keys(data))
    setIsStart(true)
    setCurrentVal(0)
    setKanjiList(shuffledKanji)
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
    console.log(kanjiList)
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
        <div className={`container ${isCorrect ? 'green' : 'red'}`}>
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
            <div
              className='score-bar'
              style={{
                gridTemplateRows: `${wrongCount || '1'}fr ${
                  rightCount || '1'
                }fr`,
              }}
            >
              <div className='wrong'>
                <h3>{wrongCount}</h3>
              </div>
              <div className='right'>
                <h3>{rightCount}</h3>
              </div>
            </div>
            <div className='options-container'>
              <button
                type='button'
                className='option'
                onClick={(e) => handleAnswer(e)}
              >
                {possibleAns[0]}
              </button>
              <button
                type='button'
                className='option'
                onClick={(e) => handleAnswer(e)}
              >
                {possibleAns[1]}
              </button>
              <button
                type='button'
                className='option'
                onClick={(e) => handleAnswer(e)}
              >
                {possibleAns[2]}
              </button>
              <button
                type='button'
                className='option'
                onClick={(e) => handleAnswer(e)}
              >
                {possibleAns[3]}
              </button>
            </div>
          </div>
          <div className='feedback'>
            <p>
              {currentQs > 1 &&
                (isCorrect
                  ? 'Answer is Correct  :D'
                  : 'Answer is Incorrect :(')}
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
// https://github.com/davidluzgouveia/kanji-data/blob/master/kanji-jouyou.json
// https://community.wanikani.com/t/list-of-kanji-by-level/42036/4
// https://github.com/davidluzgouveia/kanji-data
// https://app.kanjialive.com/api/docs
