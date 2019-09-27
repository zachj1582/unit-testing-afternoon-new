const express = require('express');
const c = require('./controller');

const app = express();

// user endpoints
app.get('/api/user/:userId', c.getUser);

// posts endpoints
app.get('/api/post/:postId', c.getPost);
app.get('/api/posts', c.getAllPosts);
app.get('/api/user/posts/:userId', c.getUserPosts);

app.listen(4000, () => console.log('Listening on port 4000'));
