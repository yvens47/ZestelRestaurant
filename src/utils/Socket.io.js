import openSocket from "socket.io-client";
const socket = openSocket();
function subscribeToTimer(cb) {
  socket.on("join", (timestamp) => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}
export { subscribeToTimer };
