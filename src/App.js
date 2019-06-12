import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import Button from './components/button';
import ListItem from './components/listItem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/index';
import './app.scss';

const initialstate = {
  btnVisibility: true,
  postQuantity: 0
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialstate
    }
    this.fetch = this.fetch.bind(this);
    this.toogleBtnVisibility = this.toogleBtnVisibility.bind(this);
  }

  toogleBtnVisibility(){
    this.setState({
      ...this.state,
      btnVisibility: !this.state.btnVisibility
    });
  }

  incrementPostQuantity = (amount) =>{
    let { postQuantity } = this.state;
    postQuantity += amount;
    this.setState({
      ...this.state,
      postQuantity: postQuantity
    });

    return postQuantity;
  }

  fetch(){
    this.props.fetchPosts();
    this.toogleBtnVisibility();
  }

  render() {
    const { posts } = this.props;
    const { btnVisibility } = this.state;

    const configButton = {
      text: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" description="some random description to test Headline component"/>
          {btnVisibility &&
            <Button {...configButton} />
          }
          { posts.length > 0 &&
            posts.map((post, index) => {
              const {title, body:description } = post;
              const configListItem = {title,description};
              return (
                <ListItem {...configListItem} key={index}/>
              )
            })
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, {fetchPosts})(App);
