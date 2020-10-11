import React, {Component, Suspense} from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

// import HomePage from '../../components/HomePage/HomePage';
import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';

const LazyNewPost = React.lazy(() => import('./NewPosts/NewPosts'));

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>HomePage</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                            {/* <li><NavLink to="/post">Post</NavLink></li> */}
                            <li><NavLink to="/post/">Post-full</NavLink></li>
                            <li><NavLink to="/category/">Category</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" render={() => <Suspense fallback={<h1>loading...</h1>}><LazyNewPost /></Suspense>} /> : null}
                    {/* <Route path="/home-page" exact component={HomePage}/> */}
                    <Route path="/post/" exact component={FullPost}/>
                    <Route path="/" exact component={Posts}/>
                    <Redirect from="/" to="/post/" />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;