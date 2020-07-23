import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from 'components/atoms/ScrollToTop/ScrollToTop';
import AppRouting from 'routes/AppRouting';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <MainTemplate>
        <AppRouting />
      </MainTemplate>
    </Router>
  );
}

export default App;
