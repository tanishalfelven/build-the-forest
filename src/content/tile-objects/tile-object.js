export default class TileObject {
    constructor(type) {
        if(!type) {
            throw new Error("TileObject must have type")
        }

        this.type = type;
    }

    setTile(tile) {
        this.tile = tile;
    }
};
