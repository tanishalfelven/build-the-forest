import Tile from "../tile.js";

export default class Buildable extends Tile {
    constructor(x, y, type, object = false) {
        super(x, y, type);

        if(object) {
            this.build(object);
        }
    }

    build(object) {
        this.object = object;

        this.object.setTile(this);
    }

    isOccupied() {
        return Boolean(this.object);
    }
}
