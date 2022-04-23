import { Routes, Route, Navigate } from 'react-router-dom';

import Film from './pages/Film';
import Films from './pages/Films/Films';
import People from './pages/People/People';
import Person from './pages/Person';
import Subscribe from './pages/Subscribe';

function Router() {
  return (
    <Routes>
      <Route path="people" element={<People />} />
      <Route path="films" element={<Films />} />
      <Route path="films/:filmId" element={<Film />} />
      <Route path="people/:personId" element={<Person />} />
      <Route path="subscribe" element={<Subscribe />} />
      <Route path="*" element={<Navigate to="people" replace />} />
    </Routes>
  );
}

export default Router;
