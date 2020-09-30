import React from 'react';

import './App.css';
import Posts from './containers/Posts/Posts';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
