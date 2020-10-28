import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import './App.css';
import Blog from './containers/Blog/Blog';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  
  componentDidMount () {
    this.props.onAuthCheck();
  }

  render () {
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
}

const mapPropsToDispatch = dispatch => {
  return {
    onAuthCheck: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapPropsToDispatch)(App);
