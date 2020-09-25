var path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/walkingGaits.js',
    // externals: ['roslib'],
    output: {
        path: path.resolve(__dirname, './dist'),
        library: 'hexapod',
        libraryTarget: 'umd',
        globalObject: "this",
        filename: 'hexapod.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                } // options 在 .babelrc 定义
            }
        ]

    }

};
