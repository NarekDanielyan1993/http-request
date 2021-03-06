import React, { Component } from 'react';

import './FullPost.css';
import axios from "axios";


class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
        
    }

    componentDidUpdate() {
        this.loadData();
    }
    

    loadData ()  {
        if(this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== parseInt(this.props.match.params.id))) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                    }) 
            }
        }
    }

    deletePost = (id) => {
        axios.delete("/posts/" + id)
            .then(response => {
                console.log(response);
            })
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;

        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit"> 
                        <button className="Delete" onClick={() => this.deletePost(this.state.loadedPost.id)}>Delete</button>
                    </div>
                </div>
                
            ); 
        }
        
        return post;
    }
}

export default FullPost;