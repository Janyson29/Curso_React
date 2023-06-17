import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2 className='h2GameOver'>A sua pontuação foi: <span>{score}</span></h2>
      <button className='buttonGameOver' onClick={retry} >Resetar jogo</button>
    </div>
  )
}

export default GameOver