import TileObject from "./tile-object.js";

const CONIFER = "conifer";
const BIRCH = "birch";

class Tree extends TileObject {
    constructor(type) {
        super(type);
    }
}

class Birch extends Tree {
    constructor() {
        super(BIRCH);
    }
}

class Conifer extends Tree {
    constructor() {
        super(CONIFER);
    }
}

export {
    CONIFER,
    BIRCH,

    Birch,
    Conifer,
};
