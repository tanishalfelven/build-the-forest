import { Machine } from "xstate";
import c from "src/content/component.js";
import Game from "src/engine/game/game.svelte";

export default Machine({
    id: "buildtheforest",
    initial: "game",

    states: {
        game: c(Game, {
            initial: "none",

            on: {
            },

            states: {
                none: {},
            }
        }),
    },
});
