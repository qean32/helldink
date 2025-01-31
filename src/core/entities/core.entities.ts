import type { multiplierType, positionType, TypeTroopWarrior } from "./core.type"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
// type Range1to100 = Range<1, 100>
type Range1to20 = Range<1, 20>

export type Kit = {
    loyalty: Range1to20;
    gold: number;
    food: number;

    stone: number;
    wood: number;

    is_live: boolean;
};

export type EntityType = {
    id: number;
    is_live: boolean;
    selected: boolean;
    position?: positionType;
};

export type HouseType = Kit & {
    id: number
    emblem: string
    country: number
}

export type Country = HouseType & {
    leader: Range1to20,
    houses: Range1to20[]
}

export type Troop = EntityType & {
    house: Range1to20
    count: number;
    experience: number
    typeTroop: TypeTroopWarrior
    multiplier: multiplierType;
};

export type Constractiion = EntityType & {
    house: Range1to20
    typePay: 1 | 2 | 3 | 4 | 5
    multiplerPay: multiplierType
}

export type Castle = Constractiion & {
    multiplerDef: multiplierType
    troops: Troop[]
}






export type TradeInviteBuy = {
    from?: number;
    to?: number;
    products: any;
    count_type?: number;
};

export type TradeInviteSale = {
    from?: number;
    to?: number;
    products: any;
    count_type?: number;
};
