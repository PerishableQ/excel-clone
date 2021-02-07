const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
}