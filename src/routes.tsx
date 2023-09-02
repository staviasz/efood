import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProfileItalian from './pages/ProfileItalian';
import ProfileJapan from './pages/ProfileJapan';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita-trattoria" element={<ProfileItalian />} />
    <Route path="/hioki-sushi" element={<ProfileJapan />} />
  </Routes>
);

export default Rotas;
