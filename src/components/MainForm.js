import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizContext } from '../Context/QuizContext';
import { randomNumber } from '../helpers/RandomNumberGenerator';
import Button from './ButtonGroup';

export const OPERATORS = [
  { operator: 'Add', sign: '+' },
  { operator: 'Sub', sign: '-' },
  { operator: 'Mul', sign: '*' },
  { operator: 'Div', sign: '/' }
];

export const MainForm = () => {
  const { userInputs, setUserInputs, setQuesStore, setQuizAnswerSheet } = useContext(QuizContext);
  const [randomElements, setRandomElements] = useState({});
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const noOfPossibleQuestions = Math.pow(userInputs.maxOperand + 1, 2); // selecting numbers from 0 to maxOperand
    if (noOfPossibleQuestions >= userInputs.noQues)
      navigate(
        '/quizzes'
      ); // ex: maxOperand: 2 and noQues: 20 -> 20 ques cannot be generated with combinations of 0 - 2
    else alert('Please enter any other max operand');
  };

  useEffect(() => {
    const randomElement = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
    const randomMaxOperand = randomNumber(10);
    setRandomElements({ sign: randomElement, no: randomMaxOperand });
    setUserInputs({
      ...userInputs,
      maxOperand: randomMaxOperand,
      operator: randomElement.operator
    });
    setQuesStore([]);
    setQuizAnswerSheet({ questions1: [], questions2: [] });
  }, []);

  return (
    <form className='App__main--form' onSubmit={handleSubmit}>
      <label>Please select the number of questions for each quiz.</label>
      <p className='faded-text'>You can select maximum 20 questions and minimum 2.</p>
      {/* <p className='faded-text'>It would be super if you select an even no.</p> */}
      <input
        type='number'
        id='quantity'
        name='quantity'
        value={userInputs.noQues}
        onChange={e => setUserInputs({ ...userInputs, noQues: e.target.value })}
        min='1'
        max='20'
        className='App__main--form--input-group'
      />
      <label>Please select the max operand.</label>
      <p className='faded-text'>You can select maximum operand less than 15.</p>
      <input
        type='number'
        id='quantity'
        name='quantity'
        value={userInputs.maxOperand ?? randomElements.no}
        onChange={e => setUserInputs({ ...userInputs, maxOperand: e.target.value })}
        min='1'
        max='15'
        className='App__main--form--input-group'
      />
      <label>Please select any one of the operator.</label>
      <div className='App__main--form--input-group__radio-group'>
        {OPERATORS.map((item, index) => {
          return (
            <div key={index}>
              <input
                type='radio'
                id={item.operator}
                name={`${item.operator}-operator`}
                checked={userInputs.operator === item.operator}
                value={userInputs.operator ?? randomElements.sign?.operator}
                onChange={() => setUserInputs({ ...userInputs, operator: item.operator })}
              />
              <label className='faded-text' htmlFor={item.operator}>
                {item.operator}
              </label>
            </div>
          );
        })}
      </div>
      <Button type='submit' text='Submit' />
    </form>
  );
};
