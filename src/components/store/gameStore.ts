import { writable } from "svelte/store";
import type { GameDataType } from "../../core/emites/types";

export const gameStore = writable({} as GameDataType)