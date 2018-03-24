import API from "./api"

let Post = {
    findAll() {
        return API.fecth("posts");
    }
}

export default Post;