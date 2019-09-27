import React, { Component } from 'react';
import StatsWidget from '../components/StatsWidget';
import ProfileWidget from '../components/ProfileWidget';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import axios from 'axios';
import Loading from '../components/Loading';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      postObj: {},
      user: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const [userRes, postRes] = await Promise.all([
      axios.get(`/api/user/${match.params.userId}`),
      axios.get(`/api/user/posts/${match.params.userId}`),
    ]);
    this.setState({ postObj: postRes.data, user: userRes.data });
  }

  render() {
    let { postObj, user } = this.state;
    if (!Object.keys(postObj).length) return <Loading />;
    return (
      <div>
        <Div flexed justify="center" align="center">
          <ProfileWidget {...user} />
        </Div>
        <Div flexed align="center" direction="column" position="relative">
          {postObj.posts.map(p => (
            <PostWidget showLink={false} key={p.id} {...p} />
          ))}
          <StatsWidget {...postObj.stats} />
        </Div>
      </div>
    );
  }
}
