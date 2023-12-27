import React, { Component } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics/Statistics';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
      },
    };
  }

  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [feedbackType]: prevState.feedback[feedbackType] + 1,
        total: prevState.feedback.total + 1,
      },
    }));
  };

  calculatePositivePercentage = () => {
    const { good, total } = this.state.feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { feedback } = this.state;

    return (
      <div>
        <Section className="title" title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>

        {feedback.total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={feedback.total}
              positivePercentage={this.calculatePositivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
