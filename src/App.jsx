import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import ResearchAreas from './pages/ResearchAreas';
import Systems from './pages/Systems';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Location from './pages/Location';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="projects" element={<Projects />} />
          <Route path="research-areas" element={<ResearchAreas />} />
          <Route path="systems" element={<Systems />} />
          <Route path="team" element={<Team />} />
          <Route path="publications" element={<Publications />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
