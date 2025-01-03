import { multiplierModel, positionModel } from "./core.model"


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
    experence: multiplierModel
}

export interface ConstructionInterface extends EntityInterface {
    country: number
    name: string
    src_img: string
    defeneMultiplier: multiplierModel
    position: positionModel
}

export interface ProductionInterface extends ConstructionInterface {
    country: number
    town: number
    name: string
    src_img: string
    defeneMultiplier: multiplierModel
    position: positionModel
    multiplier: multiplierModel
}