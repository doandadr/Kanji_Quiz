import React, { useState } from 'react'

const StartMenu = ({ initialize }) => {
  const [grade, setGrade] = useState('gradeAll')
  const [jlpt, setJlpt] = useState('jlptAll')

  const handleSubmit = () => {}
  const handleGradeChange = (e) => {
    setGrade(e.target.value)
    console.log(grade)
  }
  const handleJLPTChange = (e) => {
    setJlpt(e.target.value)
    console.log(jlpt)
  }

  return (
    <div className='start-menu'>
      <div className='start-container'>
        <form onSubmit={handleSubmit}>
          <div className='select'>
            <select
              // defaultValue='Select Grade'
              value={grade}
              onChange={handleGradeChange}
            >
              <option value='gradeAll'>Select Grade Taught</option>
              <option value='grade1'>Grade 1</option>
              <option value='grade2'>Grade 2</option>
              <option value='grade3'>Grade 3</option>
              <option value='grade4'>Grade 4</option>
              <option value='grade5'>Grade 5</option>
              <option value='grade6'>Grade 6</option>
              <option value='grade8'>Grade 8</option>
            </select>
          </div>
          <div className='select'>
            <select
              // defaultValue='Select JLPT Level'
              value={jlpt}
              onChange={handleJLPTChange}
            >
              <option value='jlptAll'>Select JLPT</option>
              <option value='jlpt5'>JLPT N5</option>
              <option value='jlpt4'>JLPT N4</option>
              <option value='jlpt3'>JLPT N3</option>
              <option value='jlpt2'>JLPT N2</option>
              <option value='jlpt1'>JLPT N1</option>
            </select>
          </div>
          <button
            type='submit'
            className='start-btn'
            onClick={() => initialize()}
          >
            Press to Start!
          </button>
        </form>
      </div>
    </div>
  )
}

export default StartMenu
