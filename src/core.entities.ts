export class Entity {
    constructor({ src_img, name }: { name: string, src_img: string }) {
        this.id = 1
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