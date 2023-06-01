import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickingEmoji = () => {
    updateScore(id)
  }
  return (
    <li className="emoji-card-container">
      <button
        className="emoji-btn"
        data-testId="emoji"
        type="button"
        onClick={onClickingEmoji}
      >
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
