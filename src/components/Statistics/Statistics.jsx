import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className="stats">
        <li className="stats-item">Good: {good}</li>
        <li className="stats-item">Neutral: {neutral}</li>
        <li className="stats-item">Bad: {bad}</li>
        <li className="stats-item">Total: {total}</li>
        <li className="stats-item">Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
