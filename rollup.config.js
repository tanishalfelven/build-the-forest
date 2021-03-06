const path = require("path");

const dev = true;

const { preprocess, processor } = require("@modular-css/svelte")({
    namer: !dev && require("@modular-css/shortnames")(),

    rewrite: false,

    map: dev ? { inline: false } : false,

    before : [
        require("postcss-nested"),
    ],

    after : [
        require("postcss-import")(),
        require("postcss-calc")(),
    ],
});

export default {
    input: 'src/app.js',

    output: {
        dir: "./public",
        format: 'es',

        assetFileNames: "style/[name][extname]",
    },

    plugins: [
        require("@rollup/plugin-node-resolve")(),

        require("rollup-plugin-commonjs")(),

        require("@rollup/plugin-json")(),

        require("@rollup/plugin-alias")({
            entries: {
                src: path.resolve(__dirname, "src"),
            }
        }),

        require('rollup-plugin-svelte')({
            preprocess,
            dev,
            extensions: [".svelte"],
            css: false,
        }),

        require("@modular-css/rollup")({
            processor,
            json: true,
            meta: true,
            namedExports: false,
        }),

        require("@modular-css/rollup-rewriter")({
            loader: require("lazyload-css"),
            loadfn: "lazyLoadCSS",
        }),

        require("./build/create-html.js")(),

        require("rollup-plugin-globsync")({
            dest: "./public",
            patterns: [
                "./src/**/*",

                "!**/*.js",
                "!**/*.css",
                "!**/*.svelte",
            ],
        }),

        require("rollup-plugin-serve")({
            host: 'localhost',
            port: 10001,

            contentBase: "public",

            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store"
                }
            ]
        }),
    ]
}