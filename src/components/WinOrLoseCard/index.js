import './index.css'

const WinOrLoseCard = props => {
  const {isWon, gameScore, playAgain} = props

  const resultDetails = isWon
    ? {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
        result: 'Won',
        score: 12,
        tag: 'Best',
      }
    : {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
        result: 'Lose',
        score: gameScore,
        tag: '',
      }
  console.log(resultDetails.tag)
  const restartGame = () => {
    playAgain()
  }

  return (
    <div className="game-result-card">
      <img
        src={resultDetails.imgUrl}
        className="game-result-emoji"
        alt="win or lose"
      />
      <div className="game-result-details-container">
        <h1 className="game-result-text">You {resultDetails.result}</h1>
        <p className="best-score-text">{resultDetails.tag} Score</p>
        <p className="score">{resultDetails.score}/12</p>
        <button className="play-again-btn" type="button" onClick={restartGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
