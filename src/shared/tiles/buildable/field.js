import Buildable from "./buildable.js";

const FIELD = "field";

export default class Field extends Buildable {
    constructor(x, y) {
        super(x, y, FIELD);
    }
}

export {
    FIELD,
}
