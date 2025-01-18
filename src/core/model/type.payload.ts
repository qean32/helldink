import { Manufacture } from "../entities/core.entities"
import type { multiplierType, positionType } from "./core.type"


export interface EntityInterface {
    src_img: string
    name: string
}

export interface CountryInterface extends EntityInterface {
    color: string
}

export interface TroopInterface extends EntityInterface {
    count: number
    country: number
    experence: multiplierType
    position: positionType;
}

export interface ConstructionInterface extends EntityInterface {
    country: number
    position: positionType
}

export interface ManufactureInterface extends ConstructionInterface {
    multiplier: multiplierType
}

export interface CastleInterface extends ConstructionInterface {
    multiplierDef: multiplierType
    manufacture: Manufacture[] | null
}