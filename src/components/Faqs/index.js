// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    stateList: [
      {postion: false, id: 0},
      {postion: false, id: 1},
      {postion: false, id: 2},
      {postion: false, id: 3},
    ],
  }

  changePosition = id => {
    this.setState(prevState => ({
      stateList: prevState.stateList.map(eachItem => {
        if (eachItem.id === id) {
          return {position: !eachItem.position, id}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {stateList} = this.state
    const {faqsList} = this.props
    let count = -1
    return (
      <div className="bg-container">
        <ul className="inner">
          <li className="firstDiv">
            <h1>FAQs</h1>
          </li>
          {faqsList.map(eachItem => {
            count += 1
            return (
              <FaqItem
                key={eachItem.id}
                changePosition={this.changePosition}
                faqDetail={eachItem}
                stateDetail={stateList[count]}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Faqs
