import { selectedObjectStore } from "../store/selectedObjecnStore";

export const selectObj = (value: any) => {
    selectedObjectStore.set(value);
};