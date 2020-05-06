import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts();
  }

  // Add Post
  addPost = text => {
    const post = {
      id: Math.random(),
      user: 'Mike Johnson',
      username: 'mike',
      date: '1 min',
      content: text,
      likeCount: 0,
      replyCount: 0
    }

    this.setState(prevState => ({ posts: [...prevState.posts, post] }));
  }

  // Load Posts
  getPosts = () => {
    const post = {
      id: Math.random(),
      user: 'Huseyn Mikayil',
      username: 'huseynmikayil',
      date: '10 min',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto ipsam soluta dolorum, suscipit laudantium, atque dicta reiciendis ducimus expedita veniam voluptate fugit fuga nihil autem cum quo dolore doloremque eveniet!',
      likeCount: 10,
      replyCount: 5
    }

    this.setState(prevState => ({ posts: [...prevState.posts, post] }));
  }

  render() {
    const { posts } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Home addPost={this.addPost} posts={posts} />
        </div>
      </Router>
    );
  }
}

export default App;
