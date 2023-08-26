import './App.css';
import ShoppingCard from './components/ShoppingCard';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { SitesContextProvider } from './context/SitesContext.js';
import { MenuProvider } from './context/MenuContext.js';
import { TestimonialsProvider } from './context/TestimonialsContext.js';

function App() {
  return (
    <Router>
      <SitesContextProvider>
        <MenuProvider>
          <TestimonialsProvider>
            <div className="App">
              <ShoppingCard />
              <Header className="Header " />
              <Main className="Main main" />
              <Footer className="Footer" />
            </div>
          </TestimonialsProvider>
        </MenuProvider>
      </SitesContextProvider>
    </Router>
  );
}

export default App;
