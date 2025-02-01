import type { multiplierType, positionType, TypeTroopWarrior } from "./core.type"
import type { EmitTypes } from "../emites"


export type GameDataType = {
    game: {
        id: number | string,
        pause: true
    },
    country: Country[],
    troops: Troop[],
    castles: Castle[],
    houses: House[],

    historystep: {
        troops: EmitTypes.MoveEmit[],
        castles: Castle[],
        houses: House[],
        country: Country[],
    },
    tiktostop: number
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
type Range1to20 = Range<1, 20>

export type Kit = {
    loyalty: Range1to20;
    gold: number;
    food: number;

    stone: number;
    wood: number;

    is_live: boolean;
};

export type Entity = {
    id: number;
    is_live: boolean;
    selected: boolean;
    position?: positionType;
};

export type House = Kit & {
    id: number
    emblem: string
    country: number
}

export type Country = House & {
    leader: number,
    houses: number[]
}

export type Troop = Entity & {
    house: number
    count: number;
    experience: number
    typeTroop: TypeTroopWarrior
    multiplier: multiplierType;
};

export type Constractiion = Entity & {
    house: number
    typePay: 1 | 2 | 3 | 4 | 5
    multiplerPay: multiplierType
}

export type Castle = Constractiion & {
    multiplerDef: multiplierType
    troops: Troop[]
}






// export type TradeInviteBuy = {
//     from?: number;
//     to?: number;
//     products: any;
//     count_type?: number;
// };

// export type TradeInviteSale = {
//     from?: number;
//     to?: number;
//     products: any;
//     count_type?: number;
// };
