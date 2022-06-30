import React from 'react';

const Progress = ({ intervals, store, nextQues, answer }) => {
  const scores = new Array(intervals).fill('');

  const renderStyle = type => {
    switch (type) {
      case 'correct':
        return {
          background: '#78b478',
          border: '1px solid #78b478'
        };
      case 'incorrect':
        return {
          background: '#dcdc8b00',
          border: '1px solid #401148'
        };
      case 'unattempted':
        return {
          background: '#d37171',
          border: '1px solid #d37171'
        };
      default:
        return;
    }
  };

  return (
    <div className='scores-container'>
      {scores.map((score, index) => {
        const style = answer.includes(index)
          ? renderStyle('correct')
          : index > nextQues
          ? renderStyle('incorrect')
          : renderStyle('unattempted');
        return (
          <div
            className={`scores-container__score-item ${index === nextQues ? 'active' : ''}`}
            style={style}></div>
        );
      })}
    </div>
  );
};

export default Progress;
