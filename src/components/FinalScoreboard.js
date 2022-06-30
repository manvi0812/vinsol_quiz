import React, { useContext } from 'react';

import { QuizContext } from '../Context/QuizContext';

const FinalScoreboard = ({ intervals }) => {
  const { quizAnswerSheet, finalScores } = useContext(QuizContext);

  return (
    <>
      {/* <h1>Final Dashboard</h1> */}
      <div className='final-scoreboard'>
        <div className='final-scoreboard--item'>
          {quizAnswerSheet.map((answer, index) => {
            return (
              <div className='final-scoreboard--item--question-result-container'>
                <div className='final-scoreboard--item--question-result-container--score-container'>
                  <h2>Quiz {index + 1} </h2>
                  <div className='final-scoreboard--item--question-result-container--score-container--score'>
                    <p>Your score</p>
                    <h2>
                      {finalScores[`quiz${index + 1}`]}/{intervals}
                    </h2>
                  </div>
                </div>
                {answer.questions.map((question, index) => {
                  return (
                    <div
                      className='final-scoreboard--item--question-result-container--question-result'
                      key={index}>
                      <div className='final-scoreboard--item--question-result-container--ques'>
                        <strong>Ques{question.quesId}:</strong>{' '}
                        <p>&nbsp;Solve the question. {question.ques}</p>
                      </div>
                      <p>
                        <strong>Expected Ans: </strong>
                        {question.answer}
                      </p>
                      <p>
                        <strong>Your Ans: </strong>
                        {question.userAnswer === '' ? 'Not attempted' : question.userAnswer}
                      </p>
                      <strong style={{ background: question.isCorrect ? '#78b478' : '#d37171' }}>
                        {question.isCorrect ? 'Correct' : 'Not Correct'}
                      </strong>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FinalScoreboard;
