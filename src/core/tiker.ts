import { io } from "socket.io-client";
import { EmitNames } from "./emites";

const socket = io('ws://localhost:5173/');

setInterval(() => {
    console.log('tik')
    socket.emit(EmitNames.Tik);
}, 5000)