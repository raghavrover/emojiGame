import './index.css'

const NavBar = props => {
  const {score, topScore, isGameCompleted} = props

  return (
    <nav className="nav-element">
      <div className="nav-bar-content">
        <div className="nav-bar-brand-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="emoji-game-text">Emoji Game</h1>
        </div>
        {!isGameCompleted && (
          <div className="score-container">
            <p className="score-text">Score: {score}</p>
            <p className="score-text">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
