type positionType = {
    x: number,
    y: number
}

function roundnum(num: number): number {
    return Math.round(num / 50) * 50;
}

export const road = (startPosition: positionType, endPosition: positionType): positionType[] => {
    let fakeStart: positionType = { x: roundnum(startPosition.x), y: roundnum(startPosition.y) }
    let fakeEnd: positionType = { x: roundnum(endPosition.x), y: roundnum(endPosition.y) }

    let returnArr: positionType[] = []

    while (fakeStart.x != fakeEnd.x || fakeStart.y != fakeEnd.y) {
        const rnd = Math.round(Math.random() * (2 - 1) + 1)

        if (rnd == 1 && fakeStart.x != fakeEnd.x) {
            if (fakeEnd.x < fakeStart.x) {
                fakeStart = { x: fakeStart.x - 50, y: fakeStart.y }
            } else {
                fakeStart = { x: fakeStart.x + 50, y: fakeStart.y }
            }
            returnArr.push({ x: fakeStart.x, y: fakeStart.y })
        }

        if (rnd == 2 && fakeStart.y != fakeEnd.y) {
            if (fakeEnd.y < fakeStart.y) {
                fakeStart = { y: fakeStart.y - 50, x: fakeStart.x }
            } else {
                fakeStart = { y: fakeStart.y + 50, x: fakeStart.x }
            }
            returnArr.push({ x: fakeStart.x, y: fakeStart.y })
        }
    }

    return returnArr
}