import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Blog from './containers/Blog/Blog';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Blog />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
