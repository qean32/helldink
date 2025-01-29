import { io } from "socket.io-client";
import { EmitNames } from "./emites";

const socket = io(`ws://${process.env.currentDomen || 'localhost:5173/'}`);

setInterval(() => {
    console.log('tik')
    socket.emit(EmitNames.Tik);
}, 1000)