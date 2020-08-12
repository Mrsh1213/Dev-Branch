import API from "./API";

export default ({url}) => {

    return new EventSource(url);

    // API({
    //     headers: {"Accept": "text/event-stream"},
    //     url: url,
    //     responseType: 'stream',
    //     method: "get"
    // }).then(res => {
    //     const stream = res.data;
    //     console.log("stream", stream)
    // });
}