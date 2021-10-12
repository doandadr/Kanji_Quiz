import React from 'react'
import { useState } from 'react'
import { shuffleArray } from './shuffleArray'
import { getRandom } from './getRandom'

import data from './kanji-jouyou.json'
import ScoreBar from './ScoreBar'
import Kanji from './Kanji'
import StartMenu from './StartMenu'
import Answers from './Answers'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const [totalQs, setTotalQs] = useState(2136)
  const [kanjiList, setKanjiList] = useState([])

  const [kanji, setKanji] = useState('懐')
  const [wrongCount, setWrongCount] = useState(1)
  const [rightCount, setRightCount] = useState(1)
  const [possibleAns, setPossibleAns] = useState(['a', 'b', 'c', 'd'])
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [currentVal, setCurrentVal] = useState(0)

  const setupNext = () => {
    setKanji(kanjiList[currentVal + 1])
    setCurrentAnswer(data[kanjiList[currentVal + 1]].meanings[0])
    setPossibleAns(
      shuffleArray([...getRandom(kanjiList, 3), kanjiList[currentVal + 1]]).map(
        (key) => data[key].meanings[0]
      )
    )
    setCurrentVal(currentVal + 1)
  }
  const handleAnswer = (e) => {
    const answer = e.target.innerText
    if (answer === currentAnswer) {
      setIsCorrect(true)
      setRightCount(rightCount + 1)
    } else {
      setIsCorrect(false)
      setWrongCount(wrongCount + 1)
    }

    if (currentVal === totalQs - 1) {
      setIsFinished(true)
    } else {
      setupNext()
    }
  }
  const initialize = (kanjiFiltered) => {
    setIsStart(true)
    setCurrentVal(0)
    setKanjiList(kanjiFiltered)
    setTotalQs(kanjiFiltered.length)
    setKanji(kanjiFiltered[currentVal])
    setCurrentAnswer(data[kanjiFiltered[currentVal]].meanings[0])
    setWrongCount(0)
    setRightCount(0)
    setPossibleAns(
      shuffleArray([
        ...getRandom(kanjiFiltered, 3),
        kanjiFiltered[currentVal],
      ]).map((key) => data[key].meanings[0])
    )
  }

  if (!isStart) {
    return <StartMenu initialize={initialize} />
  }
  if (isFinished) {
    return (
      <div className='finished'>
        <h2>
          your score is {rightCount} out of {rightCount + wrongCount}
        </h2>
      </div>
    )
  }
  return (
    <>
      <Header />
      <main>
        <div
          className={`container ${
            currentVal > 0 &&
            (isCorrect ? 'container--correct' : 'container--incorrect')
          }`}
        >
          <div className='quiz-container'>
            <Kanji currentVal={currentVal} totalQs={totalQs} kanji={kanji} />
            <ScoreBar wrongCount={wrongCount} rightCount={rightCount} />
            <Answers possibleAns={possibleAns} handleAnswer={handleAnswer} />
          </div>
          <div className='feedback'>
            <p>
              {currentVal > 0 &&
                (isCorrect
                  ? 'Answer is Correct  :D'
                  : 'Answer is Incorrect :(')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
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
