import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionsBank'

export default function EndScreen() {
    const {score,setScore,setGameState}=useContext(QuizContext)
    const resetGame=()=>{
        setScore(0);
        setGameState('menu')
    }
  return (
    <div className='EndScreen'>
        {''}
        <h1>Quiz Finished</h1>
        <h3>{score}/{Questions.length}</h3>
        <button onClick={resetGame}>RestartQuiz</button>
    </div>
  )
}
