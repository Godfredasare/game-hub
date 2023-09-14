import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params:{
        key: '13967dbc90c040f58ee069ffbccc5cb3'
    }
})