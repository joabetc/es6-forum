import Post from 'Post';
import ui from 'ui';

Post.findAll()
    .then(ui.renderPosts)
    .catch((error) => console.log(error));