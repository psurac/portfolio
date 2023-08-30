import './App.css';
import ShoppingCard from './components/ShoppingCard';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import { ShoppingCardProvider } from './context/ShoppingCardContext';
import { SitesContextProvider } from './context/SitesContext.js';
import { MenuProvider } from './context/MenuContext.js';
import { TestimonialsProvider } from './context/TestimonialsContext.js';

function App() {

  return (
    <Router>
      <ShoppingCardProvider>
        <SitesContextProvider>
          <MenuProvider>
            <TestimonialsProvider>
              <div className="App">
                <ShoppingCard />
                <Header className="Header " />
                <Main className="main" />
                <Footer className="Footer" />
              </div>
            </TestimonialsProvider>
          </MenuProvider>
        </SitesContextProvider>
      </ShoppingCardProvider>
    </Router>
  );
}

export default App;
