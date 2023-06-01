import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojisIdList: [],
    score: 0,
    topScore: 0,
    isWon: false,
    isGameCompleted: false,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getListLength = list => list.length

  updateScore = id => {
    const {emojisIdList, score, topScore} = this.state
    if (emojisIdList.includes(id)) {
      if (score > topScore) {
        this.setState({topScore: score})
      }
      this.setState({isGameCompleted: true})
    } else {
      const newEmojisIdList = [...emojisIdList, id]
      if (this.getListLength(newEmojisIdList) === 12) {
        this.setState({
          emojisIdList: newEmojisIdList,
          isWon: true,
          isGameCompleted: true,
          score,
          topScore: 12,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          emojisIdList: newEmojisIdList,
        }))
      }
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      emojisIdList: [],
      isWon: false,
      isGameCompleted: false,
      score: 0,
      topScore: prevState.topScore,
    }))
  }

  render() {
    const emojisList = this.getShuffledEmojisList()
    const {score, topScore, isWon, isGameCompleted} = this.state

    return (
      <div className="emoji-card-bg-container">
        <NavBar
          topScore={topScore}
          score={score}
          isGameCompleted={isGameCompleted}
        />
        {!isGameCompleted && (
          <ul className="emoji-cards-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                updateScore={this.updateScore}
              />
            ))}
          </ul>
        )}
        {(isWon || isGameCompleted) && (
          <WinOrLoseCard
            isWon={isWon}
            gameScore={score}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
