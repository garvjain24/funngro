import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TeenPage from './TeenPage';
import CompanyPage from './components/CompanyPage';


const App: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get('path');
    if (path) {
      navigate(path.replace('/funngro', ''));
    }
  }, [navigate]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/funngro/" element={<Home />} />
          <Route path="/funngro/teen" element={<TeenPage />} />
          <Route path="/funngro/company" element={<CompanyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
