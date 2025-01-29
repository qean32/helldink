const data = {
    "game": { "id": "", "pouse": true },
    "troops": [{ "position": { "x": 160, "y": 130 }, "country": 1, "count": 410, "experence": 0.3, "name": "./fortess.svg", "src_img": "deer.svg", "id": 666 }],
    "castles": [],
    "historystep": {
        "troops": [{ "way": [{ "x": 150, "y": 150 }, { "x": 175, "y": 150 }, { "x": 200, "y": 150 }, { "x": 225, "y": 150 }, { "x": 250, "y": 150 }, { "x": 275, "y": 150 }, { "x": 300, "y": 150 }, { "x": 325, "y": 150 }, { "x": 350, "y": 150 }, { "x": 375, "y": 150 }, { "x": 400, "y": 150 }], "currentStep": 5, "idTroop": 666 }],
        "castles": []
    },
    "step": { "troops": [{ "idTroop": 666, "position": { "x": 275, "y": 150 } }], "castles": [] }
}

data.step.troops.forEach((item) => {
    const idTroop = item.idTroop
    const troop = data.troops.find((item_) => item_.id == idTroop)
    if (troop) {
        troop.position = item.position
    }
})