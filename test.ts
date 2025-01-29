const data = {
    game: {
        id: 324324,
        pouse: true
    },
    troops: [],
    castles: [],
    historystep: {
        troops: [
            {
                way: [
                    {
                        x: 1050,
                        y: 700
                    },
                    {
                        x: 1050,
                        y: 700
                    },
                    {
                        x: 1050,
                        y: 700
                    },
                ],
                currentStep: 1,
                idTroop: 8953
            }
        ],
        castles: []
    },
    step: {
        troops: [
            {
                idTroop: 8953,
                position: {
                    x: 1200,
                    y: 750
                }
            }
        ],
        castles: []
    }
}




data.historystep.troops.forEach(({ currentStep, idTroop, way }, index) => {
    data.historystep.troops[index].currentStep += 1
    data.step.troops = [...data.step.troops, {
        idTroop: idTroop,
        position: way[currentStep],
    }]

    if (data.historystep.troops[index].currentStep == way.length + 1) {
        data.historystep.troops = data.historystep.troops.filter((elem, index_) => index_ !== index)
        return
    }
})

console.log(data)