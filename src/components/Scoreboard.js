import React from 'react';

const Scoreboard = ({ answer, intervals, id }) => {
  return (
    <div className='quiz-container__scoreboard'>
      <strong>Quiz {id}</strong>
      <p>
        Score: {answer.length}/{intervals}{' '}
      </p>
    </div>
  );
};

export default Scoreboard;
