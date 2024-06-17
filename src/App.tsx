import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TeenPage from './TeenPage';
import CompanyPage from './components/CompanyPage';


const App: React.FC = () => {
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
