import { Manufacture } from "../entities/core.entities"
import { multiplierType, positionType } from "./core.type"


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
}

export interface ConstructionInterface extends EntityInterface {
    country: number
    position: positionType
}

export interface ManufactureInterface extends ConstructionInterface {
    multiplier: multiplierType
}

export interface CastelInterface extends ConstructionInterface {
    multiplierDef: multiplierType
    manufacture: Manufacture[]
}