const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                login: 'login@http://localhost:8083/remoteEntry.js',
                transaction: 'transaction@http://localhost:8081/remoteEntry.js',
                 customerAccInfo: 'customerAccInfo@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJSON.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig)