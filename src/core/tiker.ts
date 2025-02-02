import { io } from "socket.io-client";
import { EmitNames } from "./emites";

const socket = io(`ws://${process.env.currentDomen || 'localhost:5173/'}`);
let tik = 1

setInterval(() => {
    console.log(`tik $${tik}`)
    tik++
    socket.emit(EmitNames.Tik);
}, 2000)