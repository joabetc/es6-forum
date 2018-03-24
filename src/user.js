import API from "./api";

let User = {
    findRecent() {
        return API.fecth("activeUsers");
    }
}

export default User;