import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainForm } from './MainForm';
import Button from './ButtonGroup';

import '../styles/App.scss';
import Instructions from './Instructions';
import { QuizContext } from '../Context/QuizContext';

const Landing = () => {
  const navigate = useNavigate();
  const { setUserInputs, userInputs } = useContext(QuizContext);

  const onClick = () => {
    setUserInputs({
      ...userInputs,
      noQues: 40,
      maxOperand: 10
    });
    navigate('/quizzes');
  };

  return (
    <div className='App'>
      <h1 className='App__head'>Maths Quiz App</h1>
      <main className='App__main'>
        <MainForm />
        <Instructions />
      </main>
      <Button type='secondary' text='Skip' cssClassName='skip-btn' onClick={onClick} />
    </div>
  );
};

export default Landing;
