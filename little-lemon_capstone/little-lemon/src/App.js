import './App.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { SitesContextProvider } from './context/SitesContext.js';
import { MenuProvider } from './context/MenuContext.js';

function App() {
  return (
    <Router>
      <SitesContextProvider>
        <MenuProvider>
          <div className="App">
            <Header className="Header " />
            <Main className="Main" />
            <Footer className="Footer" />
          </div>
        </MenuProvider>
      </SitesContextProvider>
    </Router>
  );
}

export default App;
