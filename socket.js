import io from "socket.io-client";

const theSocket = io("http://localhost:9090");
export default theSocket;
