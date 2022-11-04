import React from 'react';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact'


const App = () => {
  return (<div className="container-fluid mx-0 my-0">
      <Header />
      <Home />
      <Footer />
      <Contact/>
    </div>
  );
}

export default App;
