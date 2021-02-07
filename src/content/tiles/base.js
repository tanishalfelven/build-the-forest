import Tile from "./tile.js";

const BASE = "base";

export default class Base extends Tile {
    constructor(x, y) {
        super(x, y, BASE);
    }
}

export {
    BASE,
}
