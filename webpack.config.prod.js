import path from 'path';
import webpack from 'webpack';

export default{
    debug: true,
    devtool: 'source-map', //Recommended for production
    noInfo: false, //webpace display
    //define the entry point
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    //define target : web or node or electron etc
    target: 'web',
    //define output => where to create our bundle in memory
    //create a path / build process that generate file for production
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    //[optional] define a plugin such as hot reloading , catching error
    plugins:[
        //Eliminate duplicate package when generating bundle
        new webpack.optimize.DedupePlugin(),
        //Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    //Define file type by defining loaders
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_module/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
};