// import React, {createContext} from "react";
// // import SockJS from "sockjs-client";
// // import Stomp,{} from "stompjs";
// import {connect} from "react-redux";
// import {setOnlineSocket} from "../redux/actions/appAction";
//
// export const SocketContext = createContext("Socket");
// // const ENDPOINT = "http://172.25.113.36:8282/ws-publisher/";
// const SocketProvider = ({children, setOnlineSocket}) => {
//
//     // const sock = new SockJS(ENDPOINT);
//     // const stompClient = Stomp.over(sock);
//     // stompClient.connect({}, function (frame) {
//     //     setOnlineSocket(true);
//     // },function (err) {
//     //     setOnlineSocket(false)
//     // });
//     // console.log("stompClient:",stompClient);
//
//     return (
//
//         <SocketContext.Provider value={{}}>
//            {children}
//         </SocketContext.Provider>
//
//     );
// };
// const mapDispatchToProps = dispatch => ({
//     setOnlineSocket: status => dispatch(setOnlineSocket(status))
// });
// // const mapStateToProps = state => ({
// //     jiraData: state.jiraReducer
// // })
// export default connect(null, mapDispatchToProps)(SocketProvider);
