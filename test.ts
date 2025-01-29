const data = {
    game: {
        id: 23131,
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
                        x: 1100,
                        y: 700
                    },
                    {
                        x: 1150,
                        y: 700
                    },
                    {
                        x: 1150,
                        y: 750
                    },
                    {
                        x: 1200,
                        y: 750
                    },
                    {
                        x: 1200,
                        y: 800
                    },
                    {
                        x: 1250,
                        y: 800
                    },
                    {
                        x: 1250,
                        y: 850
                    },
                    {
                        x: 1300,
                        y: 850
                    },
                    {
                        x: 1300,
                        y: 900
                    },
                    {
                        x: 1350,
                        y: 900
                    },
                    {
                        x: 1400,
                        y: 900
                    },
                    {
                        x: 1450,
                        y: 900
                    },
                    {
                        x: 1450,
                        y: 950
                    },
                    {
                        x: 1500,
                        y: 950
                    },
                    {
                        x: 1500,
                        y: 1000
                    },
                    {
                        x: 1550,
                        y: 1000
                    },
                    {
                        x: 1550,
                        y: 1050
                    },
                    {
                        x: 1550,
                        y: 1100
                    },
                    {
                        x: 1550,
                        y: 1150
                    },
                    {
                        x: 1600,
                        y: 1150
                    },
                    {
                        x: 1650,
                        y: 1150
                    },
                    {
                        x: 1650,
                        y: 1200
                    },
                    {
                        x: 1650,
                        y: 1250
                    },
                    {
                        x: 1650,
                        y: 1300
                    },
                    {
                        x: 1650,
                        y: 1350
                    },
                    {
                        x: 1650,
                        y: 1400
                    },
                    {
                        x: 1650,
                        y: 1450
                    },
                    {
                        x: 1700,
                        y: 1450
                    },
                    {
                        x: 1700,
                        y: 1500
                    },
                    {
                        x: 1750,
                        y: 1500
                    },
                    {
                        x: 1800,
                        y: 1500
                    },
                    {
                        x: 1850,
                        y: 1500
                    },
                    {
                        x: 1900,
                        y: 1500
                    }
                ],
                currentStep: 0,
                idTroop: 8953
            }
        ],
        castles: []
    },
    step: {
        troops: [],
        castles: []
    }
}




data.historystep.troops.forEach((item) => {
    item.currentStep += 1
    data.step.troops = [...data.step.troops, {
        idTroop: item.idTroop,
        position: item.way[item.currentStep]
    }]
})

console.log(data.step.troops)