import React, { useState } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics/Statistics';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';
import './App.css';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const handleFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
      total: prevFeedback.total + 1,
    }));
  };

  const calculatePositivePercentage = () => {
    const { good, total } = feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <Section className="title" title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>

      {feedback.total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={feedback.total}
            positivePercentage={calculatePositivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
