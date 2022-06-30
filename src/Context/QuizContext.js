import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const QuizContext = createContext();

export const QuizContextProvider = props => {
  const [userInputs, setUserInputs] = useLocalStorage('userInputs', {
    noQues: 20,
    maxOperand: 13,
    operator: ''
  });
  const [quesStore, setQuesStore] = useLocalStorage('quesStore', []);
  const noOfQuiz = new Array(2).fill(0);
  const [quizAnswerSheet, setQuizAnswerSheet] = useLocalStorage('quizAnswerSheet', {
    questions1: [],
    questions2: []
  });

  return (
    <QuizContext.Provider
      value={{
        userInputs,
        setUserInputs,
        quesStore,
        setQuesStore,
        noOfQuiz,
        quizAnswerSheet,
        setQuizAnswerSheet
      }}>
      {props.children}
    </QuizContext.Provider>
  );
};
