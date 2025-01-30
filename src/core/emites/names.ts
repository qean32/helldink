const createEmitName = (name: string) => {
    return `${name}${'Emit'}`
}

export const ConnectGameEmit = createEmitName('ConnectGame')
export const MoveTroopEmit = createEmitName('MoveTroop')
export const MoveTroopEmit_ = createEmitName('MoveTroop_')
export const JoinEmit = createEmitName('Join')
export const Tik = createEmitName('Tik')
