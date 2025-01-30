import { io } from "socket.io-client";
import { writable } from "svelte/store";
import { EmitNames } from "../../core/emites";
import type { GameType } from "../../core/emites/types";
const socket = io();

export const socketStore = writable({
    connect: (game: string) => {
        socket.emit(EmitNames.JoinEmit, game);
    },
    socket
} as socketStoreType)

export type socketStoreType = {
    connect: (game: string) => void,
    socket: any
}