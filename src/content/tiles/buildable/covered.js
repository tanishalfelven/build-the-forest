import Buildable from "./buildable.js";

const COVERED = "covered";

export default class Covered extends Buildable {
    constructor(x, y, tower = false) {
        super(x, y, COVERED, tower);
    }
}

export {
    COVERED,
}
