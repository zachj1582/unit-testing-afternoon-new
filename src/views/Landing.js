import React, { Component } from 'react';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import Loading from '../components/Loading';
import axios from 'axios';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/posts');
    this.setState({ posts: data });
  }

  render() {
    if (!this.state.posts.length) return <Loading />;
    return (
      <Div flexed direction="column" align="center">
        {this.state.posts.map(p => {
          return <PostWidget key={p.id} {...p} />;
        })}
      </Div>
    );
  }
}
