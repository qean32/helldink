import { selectedObjectStore } from "../store/selectedObj";

export const selectObj = (value: any) => {
    selectedObjectStore.set(value);
};