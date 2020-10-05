import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Posts from './containers/Blog/Posts/Posts';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Route path="/" exact component={Posts}/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
