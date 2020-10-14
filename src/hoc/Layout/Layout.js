import React, { Component } from 'react';
import Aux from '../Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
                <Aux>
                    <Toolbar />
                    {/* sidebar */}
                    {/* main content */}
                    <main style={{backgroundColor: '#092e42'}}>
                        {this.props.children}
                    </main>
                </Aux>
        );
    }
}

export default Layout;