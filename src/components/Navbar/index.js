import './index.css'

const Navbar = props => {
  const {initialScore, initialTimerSeconds} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-card">
        <li>
          <p className="score">
            Score: <snap className="span">{initialScore}</snap>
          </p>
        </li>
        <li className="timer-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="span">{initialTimerSeconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
