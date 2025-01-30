import { writable } from "svelte/store";
import type { positionType } from "../../core/model/core.type";

export const selectedObjectStore = writable({})
export type selectedObjectType = {
    position: positionType
    id: number
}