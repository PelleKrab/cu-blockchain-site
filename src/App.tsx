import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './routes';

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-black">
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.element} 
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
