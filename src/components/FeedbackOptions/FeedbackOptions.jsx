import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="feedback">
      <ul className="feedback-btns">
        <li>
          <button
            type="button"
            className="feedback-btn"
            onClick={() => onLeaveFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className="feedback-btn"
            onClick={() => onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            className="feedback-btn"
            onClick={() => onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
