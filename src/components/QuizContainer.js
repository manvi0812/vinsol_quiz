import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './ButtonGroup';
import QuizSection from './QuizSection';
import { QuizContext } from '../Context/QuizContext';
import { randomQuestion } from '../helpers/RandomNumberGenerator';
import { arrayAlreadyHasArray } from '../helpers/index';
import FinalScoreboard from './FinalScoreboard';

const QuizContainer = () => {
  const { quesStore, setQuesStore, userInputs, noOfQuiz, setQuizAnswerSheet } =
    useContext(QuizContext); // extracting from context
  const navigate = useNavigate();
  const intervals = Math.floor(userInputs.noQues / noOfQuiz.length); // chunk size

  const [store1, setStore1] = useState({ questions: [] });
  const [store2, setStore2] = useState({ questions: [] });
  const [showScoreboard, setShowScoreboard] = useState(false);

  useEffect(() => {
    if (store1.questions.length + store2.questions.length == userInputs.noQues) {
      setShowScoreboard(true);
      setQuizAnswerSheet([store1, store2]);
    }
  }, [store1.questions, store2.questions, userInputs]);

  useEffect(() => {
    let value = 0, // random value pair [random_number1, random_number2]
      check = false, // will check if same value is present in the array
      noQues = userInputs.noQues,
      newstore = [];
    for (let i = 0; i < noQues; i++) {
      value = randomQuestion(userInputs.maxOperand);
      check = arrayAlreadyHasArray(newstore, value);
      if (check) {
        noQues++; // if array already has the same value, increase the size of the array
        continue;
      }
      newstore.push(value);
    }

    setQuesStore(newstore);
  }, [setQuesStore, userInputs.noQues]);

  return (
    <div className='quiz-container'>
      <Button
        type='secondary'
        text='Reset Quiz'
        cssClassName='reset-btn'
        onClick={() => navigate('/')}
      />
      {showScoreboard ? (
        <FinalScoreboard />
      ) : (
        <>
          {noOfQuiz.map((quiz, index) => {
            let dividedArrays = [];

            // () to divider array into chunks
            for (let i = 0; i < userInputs.noQues; i += intervals) {
              const chunk = quesStore.slice(i, i + intervals);
              dividedArrays.push(chunk);
            }

            return (
              <>
                {quesStore && (
                  <QuizSection
                    key={quiz + index}
                    id={index + 1}
                    idBasedQuesStore={dividedArrays[index]}
                    intervals={intervals}
                    store={index === 0 ? store1 : store2}
                    setStore={index === 0 ? setStore1 : setStore2}
                  />
                )}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default QuizContainer;
