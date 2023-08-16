import './App.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { SitesContextProvider } from './context/SitesContext.js';

function App() {
  return (
    <Router>
      <SitesContextProvider>
        <div className="App">
          <Header className="Header " />
          <Main className="Main" />
          <Footer className="Footer" />
        </div>
      </SitesContextProvider>
    </Router>
  );
}

export default App;
