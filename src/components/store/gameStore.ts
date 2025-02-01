import { writable } from "svelte/store";
import type { GameDataType } from "../../core/entities/core.entities";

export const gameStore = writable({} as GameDataType)