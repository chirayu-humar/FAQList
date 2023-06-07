// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetail, stateDetail, changePosition} = props
  const {questionText, answerText} = faqDetail
  const {position, id} = stateDetail
  const changeStatusPosition = () => {
    changePosition(id)
  }
  return (
    <li className="outer">
      <div className="firstChild">
        <h1>{questionText}</h1>
        <div>
          <button onClick={changeStatusPosition}>
            {!position && (
              <img
                alt="plus"
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              />
            )}
            {position && (
              <img
                alt="minus"
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              />
            )}
          </button>
        </div>
      </div>
      <hr />
      {position && (
        <div className="secondChild">
          <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
