import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import QuizContainer from './components/QuizContainer';
import { QuizContextProvider } from './Context/QuizContext';

import * as ROUTES from './routes/routes';

function App() {
  return (
    <QuizContextProvider>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.QUIZZES} element={<QuizContainer />} />
      </Routes>
    </QuizContextProvider>
  );
}

export default App;
