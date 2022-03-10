const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js("resources/js/app.js", "public/js").postCss(
//     "resources/css/app.css",
//     "public/css",
//     [
//         //
//     ]
// );

// LOGIN MIX

// mix main javascript
mix.js("public/template/js/main.js", "public/assets/js/main.min.js").version();

// mix main css file
mix.styles(
    "public/template/css/style.css",
    "public/assets/css/style.min.css"
).version();

// mix vendor javascript
mix.js(
    ["public/template/vendor/bootstrap/js/bootstrap.bundle.min.js"],
    "public/vendor/bootstrap/js/bootstrap.min.js"
);

// mix vendor css file
mix.styles(
    [
        "public/template/vendor/bootstrap/css/bootstrap.min.css",
        "public/template/vendor/bootstrap-icons/bootstrap-icons.css",
    ],
    "public/vendor/bootstrap/css/bootstrap.min.css"
);
