import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";

import './Blog.css';
import axios from "../../axios";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";


class Blog extends Component {
   
    render () {


        return (
            
            <div>
                <div className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact>posts</NavLink>
                                <NavLink to={{
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: "?quick-submit=true"

                                }}
                                activeClassName="active-style"
                                activeStyle={{
                                    color: "orange",
                                    textDecoration: "underline"
                                }}
                                >new-post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
               
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts"  component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;