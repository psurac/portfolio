import { useState, useEffect } from 'react';
import './App.css';
import ShoppingCard from './components/ShoppingCard';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoppingCardProvider } from './context/ShopingCardContext';
import { SitesContextProvider } from './context/SitesContext.js';
import { MenuProvider } from './context/MenuContext.js';
import { TestimonialsProvider } from './context/TestimonialsContext.js';

function App() {
  const [ showCard, setShowCard ] = useState(false);

  function toggleShowCard () {
    setShowCard(!showCard);
  }

  useEffect(() => {
    const shoppingCard = document.querySelector('.shopping-card')
    if (showCard) {
      shoppingCard.style.right = '0';
    } else {
      shoppingCard.style.right = '-100%';
    }
  }, [showCard, setShowCard]);

  return (
    <Router>
      <ShoppingCardProvider>
        <SitesContextProvider>
          <MenuProvider>
            <TestimonialsProvider>
              <div className="App">
                <ShoppingCard toggleShowCard={toggleShowCard}/>
                <Header className="Header " toggleShowCard={toggleShowCard} />
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
