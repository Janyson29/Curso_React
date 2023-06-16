import React from 'react'
import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button className='button' onClick={verifyLetter}>Start</button>
    </div>
  )
}

export default Game