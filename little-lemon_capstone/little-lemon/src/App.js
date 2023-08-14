import './App.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="Header " />
        <Main className="Main" />
        <Footer className="Footer" />
      </div>
    </Router>
  );
}

export default App;
