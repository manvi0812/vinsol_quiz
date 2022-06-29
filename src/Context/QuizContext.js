import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizContextProvider = props => {
  const [userInputs, setUserInputs] = useState({
    noQues: 20,
    maxOperand: 13,
    operator: ''
  });
  const [quesStore, setQuesStore] = useState([]);
  const noOfQuiz = new Array(2).fill(0);
  const [quizAnswerSheet, setQuizAnswerSheet] = useState({ questions1: [], questions2: [] });

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
