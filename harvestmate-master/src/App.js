
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './welcomePage';
import Testing from './Pages/Testing';


function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="App">
              <header className="App-header">
                <div>
                  <WelcomePage />
                </div>
                <Link to="/Testing">Go to New Page</Link> 
              </header>
            </div>
          } 
        />
        <Route path="/Testing" element={<Testing />} />
        
      </Routes>
    </Router>
  );
}

export default App;
