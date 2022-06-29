import React, { useEffect } from 'react';

const Progress = ({ intervals, store, nextQues, answer, setAnswer }) => {
  const scores = new Array(intervals).fill('');

  useEffect(() => {
    if (nextQues > 0) {
      let check = store.questions[nextQues - 1].isCorrect;
      if (check) setAnswer(i => [...i, nextQues - 1]);
    }
  }, [store, nextQues]);

  return (
    <div className='scores-container'>
      {scores.map((score, index) => {
        return (
          <div
            className={`scores-container__score-item ${index === nextQues ? 'active' : ''}`}
            style={{
              background: answer.includes(index)
                ? '#78b478 '
                : index > nextQues
                ? '#dcdc8b00'
                : '#d37171',
              border: answer.includes(index)
                ? '1px solid #78b478 '
                : index > nextQues
                ? '2px solid #401148'
                : '1px solid #d37171'
            }}></div>
        );
      })}
    </div>
  );
};
//#9ba345
//#dcdc8b00
export default Progress;
