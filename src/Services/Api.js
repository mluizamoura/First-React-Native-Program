import axios from "axios";

const Api = axios.create({
    baseURL: "https://shrouded-shelf-01513.herokuapp.com/"
})

export default Api;
