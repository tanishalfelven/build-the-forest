import TileObject from "./tile-object.js";

const TURRET = "turret";

export default class Turret extends TileObject {
    constructor() {
        super(TURRET);
    }
}

export {
    TURRET,
};
