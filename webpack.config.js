const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
    mode: (env && env.prod) ? 'production' : 'development',
    devtool: 'source-map',
    cache: false,
    entry: {
        app: './src/index.jsx'
    },
    externals: {
        'react': 'React',
        'react-bootstrap': 'ReactBootstrap',
        'react-dom': 'ReactDOM',
        'redux': 'Redux'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].min.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        }, {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }, {
            test: /\.js$/,
            use: {
                loader: 'source-map-loader'
            },
            enforce: 'pre'
        }]
    },
    optimization: {
        minimize: process.env.NODE_ENV !== 'development'
    },
    plugins: [
        new CopyWebpackPlugin(
            (env && env.prod)
                ? [
                    { from: 'src/index.html', to: '' },
                    { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'css/bootstrap.css' },
                    { from: 'node_modules/bootstrap/dist/fonts/*', to: 'fonts', flatten: true },
                    { from: 'node_modules/react/umd/react.production.min.js', to: 'js/react.js' },
                    { from: 'node_modules/react-bootstrap/dist/react-bootstrap.min.js', to: 'js/react-bootstrap.js' },
                    { from: 'node_modules/react-dom/umd/react-dom.production.min.js', to: 'js/react-dom.js' },
                    { from: 'node_modules/redux/dist/redux.min.js', to: 'js/redux.js' }
                ]
                : [
                    { from: 'src/index.html', to: '' },
                    { from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'css/bootstrap.css' },
                    { from: 'node_modules/bootstrap/dist/fonts/*', to: 'fonts', flatten: true },
                    { from: 'node_modules/react/umd/react.development.js', to: 'js/react.js' },
                    { from: 'node_modules/react-bootstrap/dist/react-bootstrap.js', to: 'js/react-bootstrap.js' },
                    { from: 'node_modules/react-dom/umd/react-dom.development.js', to: 'js/react-dom.js' },
                    { from: 'node_modules/redux/dist/redux.js', to: 'js/redux.js' }
                ]

        )
    ]
});
