import { Point } from "./lib/core/a-star";

let grid: Point[] = [
    {
        value: 0,
        position: {
            x: 1800,
            y: 50
        },
        index: 0,
        g: 0,
        h: 0,
        f: 0,
        parent: null
    },
    {
        value: 0,
        position: {
            x: 1750,
            y: 50
        },
        index: 1,
        g: 0,
        h: 0,
        f: 0,
        parent: null
    }
]


function getNeighbors(grid, node): Point[] {
    const neighbors: Point[] = [];
    const directions = [
        { x: 0, y: 50 },  // Вниз
        { x: 50, y: 0 },  // Вправо
        { x: 0, y: -50 }, // Вверх
        { x: -50, y: 0 }  // Влево
    ];

    for (const dir of directions) {
        const newX: number = node.position.x + dir.x;
        const newY: number = node.position.y + dir.y;

        console.log(grid.some((item: Point) => item.position.x == newX && item.position.y == newY))
        if (grid.some((item: Point) => item.position.x == newX && item.position.y == newY)) {
            neighbors.push({
                ...node,
                position: { x: newX, y: newY }
            });
        }
    }

    return neighbors;
}

console.log(getNeighbors(grid, grid[0]))