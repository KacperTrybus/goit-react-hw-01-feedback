import React from 'react';
import Feedback from './Feedback/Feedback.jsx';

export const App = () => {
  return (
    <div>
      <Feedback good={0} neutral={0} bad={0} />
    </div>
  );
};
