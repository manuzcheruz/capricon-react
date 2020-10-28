import React, {Component, Suspense} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

// import HomePage from '../../components/HomePage/HomePage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import CategoryPage from './Category/CategoryPage';
import FullPost from './FullPost/FullPost';
import NewPosts from './NewPosts/NewPosts';
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
                    <Route path="/category/" exact component={CategoryPage}/>
                    <Route path="/author/" exact component={ProfilePage} />
                    <Route path="/new-post" exact component={NewPosts} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/" component={Posts}/>
                    <Redirect from="/" to="/post/" />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;