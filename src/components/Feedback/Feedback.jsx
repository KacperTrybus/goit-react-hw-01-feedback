import propTypes from 'prop-types';
import '../Feedback/feedback.css';
import React, { Component } from 'react';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    };
  }

  handleClick = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
      total: prevState.total + 1,
    }));
  };

  conutTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.conutTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <div className="feedback">
          <h1 className="title"> Please leave feedback</h1>
          <ul className="feedback-btns">
            <li>
              <button
                type="button"
                className="feedback-btn"
                id="good"
                onClick={() => this.handleClick('good')}
              >
                Good
              </button>
            </li>
            <li>
              <button
                type="button"
                className="feedback-btn"
                id="neutral"
                onClick={() => this.handleClick('neutral')}
              >
                Neutral
              </button>
            </li>
            <li>
              <button
                type="button"
                className="feedback-btn"
                id="bad"
                onClick={() => this.handleClick('bad')}
              >
                Bad
              </button>
            </li>
          </ul>

          <h2 className="title">Statistics</h2>
          <ul className="stats">
            <li className="stats-item">Good: {good}</li>
            <li className="stats-item">Neutral: {neutral}</li>
            <li className="stats-item">Bad: {bad}</li>
            <li className="stats-item">Total: {total}</li>
            <li className="stats-item">
              Positive feedback: {positiveFeedback}%
            </li>
          </ul>
        </div>
      </div>
    );
  }

  static propTypes = {
    state: propTypes.shape({
      good: propTypes.number.isRequired,
      neutral: propTypes.number.isRequired,
      bad: propTypes.number.isRequired,
      total: propTypes.number.isRequired,
      positiveFeedback: propTypes.number.isRequired,
    }).isRequired,
  };
}

export default Feedback;
