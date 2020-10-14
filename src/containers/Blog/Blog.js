import React, {Component, Suspense} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

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