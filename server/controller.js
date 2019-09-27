const { users, posts } = require('./data');
const { wordCount, attachUserName } = require('./utils');

module.exports = {
  getUser(req, res) {
    const { userId } = req.params;
    res.send(users.find(u => u.id === Number(userId)));
  },
  getUserPosts(req, res) {
    const { userId } = req.params;
    const userPosts = posts.filter(p => p.userId === Number(userId));
    const postsObj = {
      stats: {
        totalPostCount: userPosts.length,
        totalWordCount: wordCount(userPosts),
      },
      posts: userPosts,
    };
    res.send(postsObj);
  },
  getAllPosts(req, res) {
    // Note: Generally this would be done with a join in the db but this is good practice for breaking out logic functions to test
    res.send(attachUserName(users, posts));
  },
  getPost(req, res) {
    const { postId } = req.params;
    const [post] = attachUserName(
      users,
      posts.filter(p => p.id === Number(postId)),
    );
    res.send(post);
  },
};
