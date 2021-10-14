import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <p>
        <a
          href='http://nihongo.monash.edu/heisigwords.html'
          target='_blank'
          rel='noreferrer'
        >
          Based on Heisig's RTK
        </a>
      </p>
      <p>
        <a
          href='https://github.com/Doanda37Rahma/Kanji_Quiz'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </p>
    </footer>
  )
}

export default Footer
