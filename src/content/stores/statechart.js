import { writable } from "svelte/store";
import { interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import BuildTheForestStatechart from "src/content/statechart/buildtheforest.machine.js";

const service = interpret(BuildTheForestStatechart);

const tree = writable([]);

new ComponentTree(service, tree.set);

service.start();

const send = service.send;

const matches = (path) => {
    const states = path.split(".");

    let current = service.state.value;

    return states.every((state) => {
        if (current === state) {
            return true;
        }

        if (!current[state]) {
            return false;
        }

        current = current[state];

        return true;
    });
};

const matching = writable(matches);

service.onTransition(() => {
    matching.set(matches);
});

export {
    tree,

    send,
    matching as matches,
};
