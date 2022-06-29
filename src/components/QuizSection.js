import React, { useState, useContext } from 'react';
import Button from './ButtonGroup';

import { QuizContext } from '../Context/QuizContext';
import { calculate, operatorsSign } from '../helpers';
import Progress from './Progress';
import Scoreboard from './Scoreboard';

const QuizSection = ({ id, idBasedQuesStore, intervals, store, setStore }) => {
  const { userInputs } = useContext(QuizContext);

  const [shouldRenderQues, setShouldRenderQues] = useState(0);
  const [nextQues, setNextQues] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [count, setCount] = useState(10);
  const [answer, setAnswer] = useState([]);

  let question = '',
    timeout = 0;

  const handleUserAnswerChange = e => {
    clearTimeout(timeout);
    setUserAnswer(e.target.value);
  };

  const checkAnswer = question => {
    if (userAnswer === '') {
      setStore({
        questions: [
          ...store.questions,
          {
            quesId: nextQues + 1,
            ques: question,
            answer: calculate(
              idBasedQuesStore[nextQues][0],
              userInputs.operator,
              idBasedQuesStore[nextQues][1]
            ),
            userAnswer: '',
            isCorrect: false
          }
        ]
      });
    } else {
      let quizBasedAnswerSheet = {},
        currentQuestion,
        answer;
      currentQuestion =
        idBasedQuesStore[nextQues][0] +
        operatorsSign[userInputs.operator] +
        idBasedQuesStore[nextQues][1];

      answer = calculate(
        idBasedQuesStore[nextQues][0],
        userInputs.operator,
        idBasedQuesStore[nextQues][1]
      );

      quizBasedAnswerSheet = {
        quesId: nextQues + 1,
        ques: currentQuestion,
        answer: answer,
        userAnswer: userAnswer,
        isCorrect: userAnswer == answer
      };
      setStore({
        questions: [...store.questions, quizBasedAnswerSheet]
      });
    }
  };

  const handleNextClick = question => {
    clearTimeout(timeout);
    setCount(10);
    checkAnswer(question);
    setUserAnswer('');
    setNextQues(nextQues + 1);
  };

  const Timer = question => {
    timeout = setTimeout(() => {
      if (count > 0) setCount(count - 1);
      if (count === 0) {
        checkAnswer(question);
        setUserAnswer('');
        if (nextQues + 1 === idBasedQuesStore.length) {
          setShouldRenderQues(-1);
        }
        setNextQues(nextQues + 1);
        setCount(10);
      }
      return () => clearTimeout(timeout);
    }, 1000);
  };

  const renderQues = type => {
    question =
      idBasedQuesStore[nextQues][0] +
      operatorsSign[userInputs.operator] +
      idBasedQuesStore[nextQues][1];

    switch (type) {
      case 'ques':
        return (
          <div className='quiz-container__quiz-section--ques-container'>
            <div className='quiz-container__quiz-section--ques-container--header'>
              {Timer(question)}
              <div className='quiz-container__quiz-section--ques-container--header__legend'>
                <span className='quiz-container__quiz-section--ques-container--header__legend--unattempted'>
                  <span className='quiz-container__quiz-section--ques-container--header__legend--unattempted--tooltip'>
                    unattempted
                  </span>
                </span>
                <span className='quiz-container__quiz-section--ques-container--header__legend--correct'></span>
                <span className='quiz-container__quiz-section--ques-container--header__legend--wrong'></span>
              </div>
              <div>{`00:${count < 10 ? `0${count}` : count}`}</div>
            </div>
            <p className='quiz-container__quiz-section--ques-container--ques'>
              <strong>{`Ques${[nextQues + 1]}- `}</strong>
              Solve the question.
            </p>
            <h3 className='quiz-container__quiz-section--ques-container--equation'>{question}</h3>
            <input
              type='text'
              text='answer'
              id='answer'
              autoComplete='off'
              placeholder='Please enter your answer...'
              value={userAnswer}
              onChange={e => handleUserAnswerChange(e)}
            />
            <div className='quiz-container__quiz-section--ques-container__footer'>
              <Progress
                intervals={intervals}
                store={store}
                nextQues={nextQues}
                answer={answer}
                setAnswer={setAnswer}
              />
              {nextQues !== idBasedQuesStore.length - 1 ? (
                <Button
                  type='primary'
                  text='Next'
                  cssClassName='next-btn'
                  onClick={() => handleNextClick(question)}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButton = type => {
    switch (type) {
      case 'start':
        return (
          <Button
            type='secondary'
            text={`Start Quiz ${id}`}
            onClick={() => {
              setShouldRenderQues(id);
            }}
          />
        );
      case 'over':
        return <Button type='secondary' text={`Quiz ${id} Over`} />;
      default:
        return;
    }
  };

  return (
    <div className='quiz-container__quiz-page'>
      <Scoreboard answer={answer} id={id} intervals={intervals} />
      <div className='quiz-container__quiz-section'>
        {shouldRenderQues === id
          ? renderQues('ques')
          : shouldRenderQues === 0
          ? renderButton('start')
          : renderButton('over')}
      </div>
    </div>
  );
};

export default QuizSection;
