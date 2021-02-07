import { Machine } from "xstate";
import c from "src/shared/component.js";
import Game from "src/game/game.svelte";

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
