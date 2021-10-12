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
  const [isStart, setIsStart] = useState(false) // start

  const [totalQs, setTotalQs] = useState(2136) // init
  const [kanjiList, setKanjiList] = useState([]) // init

  const [kanji, setKanji] = useState('懐')
  const [wrongCount, setWrongCount] = useState(1) // quizlogic
  const [rightCount, setRightCount] = useState(1) // quizlogic
  const [possibleAns, setPossibleAns] = useState(['a', 'b', 'c', 'd']) // quizlogic
  const [isCorrect, setIsCorrect] = useState(false) // quizlogic
  const [currentAnswer, setCurrentAnswer] = useState('') // quizlogic
  const [currentVal, setCurrentVal] = useState(0) // quizlogic

  const handleAnswer = (e) => {
    const answer = e.target.innerText
    if (answer === currentAnswer) {
      setIsCorrect(true)
      setRightCount(rightCount + 1)
    } else {
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
    setCurrentVal(currentVal + 1)
  }
  const initialize = () => {
    const shuffledKanji = shuffleArray(Object.keys(data))
    setIsStart(true)
    setCurrentVal(0)
    setKanjiList(shuffledKanji)
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

  if (!isStart) {
    return <StartMenu initialize={initialize} />
  }
  return (
    <>
      <Header />
      <main>
        <div
          className={`container ${
            currentVal > 0 && (isCorrect ? 'green' : 'red')
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
