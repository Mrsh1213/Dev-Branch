import axios from "axios";

export default (conf = {
    method: 'get',
    url: ''
}) => {
    return axios(conf);
}
