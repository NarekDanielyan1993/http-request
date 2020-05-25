import axios from "axios";

let instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["AUTHORIZATION"] = "tokenn";

export default instance;