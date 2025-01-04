import * as coredata from "../../data/core.data"
import { generateID } from "../function/generateNumber"
import { multiplierType, positionType } from "../model/core.model"
import { CastelInterface, ConstructionInterface, CountryInterface, ManufactureInterface, TroopInterface } from "../model/create.model"

export class Game {
    id: number
    troops: Troop[]
    countres: Country[]

}

export class mapPoint {
    id: number
    multiplier: multiplierType
    position: positionType
}

export class Entity {
    constructor({ src_img, name }: { name: string, src_img: string }) {
        this.id = generateID()
        this.name = name
        this.src_img = src_img
        this.selected = false
    }
    id: number
    src_img: string
    name: string
    selected: boolean

    Select() {
        this.selected = !this.selected
    }
}

export class Construction extends Entity {
    constructor(payload: ConstructionInterface) {
        super(payload)
        this.is_destroy = false
        this.position = payload.position
        this.country = payload.country
    }
    country: number
    is_destroy: boolean
    position: positionType
}

export class Manufacture extends Construction {
    constructor(payload: ManufactureInterface) {
        super(payload)
        this.multiplier = payload.multiplier
    }
    multiplier: multiplierType
}

export class Castel extends Construction {
    constructor(payload: CastelInterface) {
        super(payload)
        this.manufacture = payload.manufacture
        this.multiplierDef = payload.multiplierDef
    }
    multiplierDef: multiplierType
    manufacture: Manufacture[]

    GetNextMultiplier() {
        const swap = (multiplier: multiplierType) => {
            this.multiplierDef = multiplier
        }
        this.multiplierDef == coredata.multiplier1 && swap(coredata.multiplier2)
        this.multiplierDef == coredata.multiplier2 && swap(coredata.multiplier3)
        this.multiplierDef == coredata.multiplier3 && swap(coredata.multiplier4)
        this.multiplierDef == coredata.multiplier4 && swap(coredata.multiplier5)
        this.multiplierDef == coredata.multiplier5 && swap(coredata.multiplier6)
    }
}

export class Vilage extends Construction {
}

export class Troop extends Entity {
    constructor(payload: TroopInterface) {
        super(payload)
        this.country = payload.country
        this.count = payload.count
    }

    SwapCountry(country: number) {
        this.country = country
    }

    GetNewNumbers(CountNewNumbers: number) {
        this.count += CountNewNumbers
    }

    GetNextMultiplier() {
        const swap = (multiplier: multiplierType) => {
            this.multiplier = multiplier
        }
        this.multiplier == coredata.multiplier1 && swap(coredata.multiplier2)
        this.multiplier == coredata.multiplier2 && swap(coredata.multiplier3)
        this.multiplier == coredata.multiplier3 && swap(coredata.multiplier4)
        this.multiplier == coredata.multiplier4 && swap(coredata.multiplier5)
        this.multiplier == coredata.multiplier5 && swap(coredata.multiplier6)
    }

    country: number
    count: number
    multiplier: multiplierType
}



export class Country extends Entity {
    constructor(paylod: CountryInterface) {
        super(paylod)
        this.color = paylod.color
        this.is_live = true
    }
    color: string
    is_live: boolean
    influence: number
    gold: number
    food: number
}
