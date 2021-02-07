import MAPDATA from "src/content/data/map.json";

import Tile, { EMPTY } from "src/content/tiles/tile.js";

import Base, { BASE } from "src/content/tiles/base.js";

import { Conifer, CONIFER, Birch, BIRCH } from "src/content/tile-objects/tree.js";

import Field, { FIELD } from "src/content/tiles/buildable/field.js";
import Covered, { COVERED } from "src/content/tiles/buildable/covered.js";

const HEIGHT = MAPDATA.length;
const WIDTH = MAPDATA[0].length;

const idToTile = {
    [FIELD]   : Field,
    [COVERED] : Covered,

    [BASE]    : Base,

    [EMPTY]   : Tile,
};

const idToTileObject = {
    [CONIFER] : (x, y) => new Covered(x, y, new Conifer()),
    [BIRCH]   : (x, y) => new Covered(x, y, new Birch()),
};

const tiles = MAPDATA.reduce((tiles, row, y) => {
    row.forEach(({ type }, x) => {
        if(type in idToTile) {
            tiles.push(new idToTile[type](x, y));
        } else if(type in idToTileObject) {
            tiles.push(idToTileObject[type](x, y));
        } else {
            console.warn(`Type "${type}" not associated with tile.`);

            // fire a warning but also throw an empty in for good measure
            tiles.push(new Tile(x, y));
        }
    });

    return tiles;
}, []);

const getTile = (iX, iY) => {
    const x = Math.floor(iX);
    const y = Math.floor(iY);

    // map is essentially indexed backwards
    if(x < 0 || x > WIDTH || y < 0 || y > HEIGHT) {
        console.warn(`Coordinates [${x}, ${y}] is out of bounds.`);

        return false;
    }

    return tiles.find(({ x : tileX, y : tileY }) => x === tileX && y === tileY);
};

window.getTile = getTile;

export {
    WIDTH,
    HEIGHT,
    MAPDATA,

    tiles,
    getTile,
};
