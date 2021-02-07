const EMPTY = "empty";

export default class Tile {
    constructor(x, y, type = EMPTY) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

export {
    EMPTY,
}
