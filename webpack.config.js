// ----------------
// Modules
// ----------------

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');



// ----------------
// Configuration
// ----------------

const Configure = mode => ({

    mode,

    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    devServer: {
        contentBase: 'dist',
        compress: true,
        port: 49031
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    output: {
        library: 'CMS',
        filename: 'pullpush.js'
    },

    devtool: 'source-map'

})



// ----------------
// Exports
// ----------------

module.exports = mode => {
    return Configure(mode);
}
