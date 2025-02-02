import { grid } from "./grid";

export class Point {
    constructor(value: number, position: { x: number, y: number }, index: number) {
        this.value = value;
        this.position = position;
        this.index = index;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }
    value: number;
    position: { x: number, y: number };
    index: number;
    parent: Point | null;
    g: number;
    h: number;
    f: number;
}

function heuristic(a: Point, b: Point) {
    return Math.abs(a.position.x - b.position.x) + Math.abs(a.position.y - b.position.y);
}

function astar(grid: Point[], start: Point, end: Point) {
    const openSet: Point[] = [];
    const closedSet: Point[] = [];

    start.f = 1000000
    openSet.push(start);

    while (openSet.length > 0) {
        openSet.sort((a, b) => a.f - b.f);
        let current: Point = openSet[0];

        if (current.position.x === end.position.x && current.position.y === end.position.y) {
            let path: Point[] = [];
            let temp: any = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Возвращаем путь в правильном порядке 
        }

        const neighbors = getNeighbors(grid, current);
        for (let neighbor of neighbors) {
            if (neighbor.value === 1) {
                continue
            }

            let tentativeGScore = current.g + 1;

            if (!openSet.some((item) => item.position.x == neighbor.position.x && item.position.y == neighbor.position.y)) {
                openSet.push(neighbor);
            } else if (tentativeGScore >= neighbor.g) {
                continue;
            }

            neighbor.parent = current;
            neighbor.g = tentativeGScore;
            neighbor.h = heuristic(neighbor, end);
            neighbor.f = neighbor.g + heuristic(neighbor, end);
        }
    }

    return []
}

function getNeighbors(grid: Point[], node: Point): Point[] {
    const neighbors: Point[] = [];
    const directions = [
        { x: 0, y: 50 },
        { x: 50, y: 0 },
        { x: 0, y: -50 },
        { x: -50, y: 0 }
    ];

    for (const dir of directions) {
        const newX: number = node.position.x + dir.x;
        const newY: number = node.position.y + dir.y;
        console.log('n')

        if (grid.some((item: Point) => item.position.x == newX && item.position.y == newY)) {
            neighbors.push({
                ...node,
                value: grid.find((item: Point) => item.position.x == newX && item.position.y == newY)?.value ?? 0,
                position: { x: newX, y: newY }
            });
        }
    }

    return neighbors;
}

console.log(astar(grid, grid[109], grid[120]))
