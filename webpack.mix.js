const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
var LiveReloadPlugin = require("webpack-livereload-plugin");
const path = require("path");

mix.js("resources/js/app.jsx", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .version();

mix.alias({
    "@": path.join(__dirname, "resources/js"),
});

// mix.webpackConfig({
//     plugins: [new LiveReloadPlugin()],
// });
