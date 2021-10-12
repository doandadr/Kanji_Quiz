import React from 'react'

const Quiz = ({ kanjiList }) => {
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

  return (
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
              (isCorrect ? 'Answer is Correct  :D' : 'Answer is Incorrect :(')}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Quiz
