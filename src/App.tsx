import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
