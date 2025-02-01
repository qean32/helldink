export const useStore = (store: any): any => {
    let socketData;
    store.subscribe((value: any) => {
        socketData = value;
    });

    return socketData
}