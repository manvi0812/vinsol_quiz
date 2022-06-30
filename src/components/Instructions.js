import React from 'react';

const Instructions = () => {
  return (
    <div className='App__main__instructions-container'>
      <strong>Instructions</strong>
      <p>
        <strong>1.</strong>
        You can choose the mentioned fields as per your needs, or you can choose default values by
        clicking on the Skip button.
      </p>
      <p>
        <strong>2.</strong> On clicking the Skip/Submit button, you'll have to attempt 2 quizzes.
      </p>
      <p>
        <strong>3.</strong> Each question in the quiz will have a 20seconds timer.
      </p>
      <p>
        <strong>4.</strong> You are required to enter your answer within that time period or else
        will be marked UNATTEMPTED.
      </p>
      <p>
        <strong>5.</strong> You will not get any marks for the UNATTEMPTED questions.
      </p>
      <p>
        <strong>6.</strong> Each question will carry 1mark.
      </p>
      <p>
        <strong>7.</strong> For each incorrect response, <strong>one mark</strong> will be deducted.
      </p>
      <p>
        <strong>7.</strong> After completing both the quizzes, the Final Scoreboard will be
        displayed.
      </p>
      <p>
        <strong>7.</strong> If you decide to practice your division skills, please enter the
        float(/decimal) values for the correct answer.
      </p>
    </div>
  );
};

export default Instructions;
