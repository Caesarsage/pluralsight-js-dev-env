import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default{
    debug: true,
    devtool: 'source-map', //Recommended for production
    noInfo: false, //webpace display
    //define the entry point
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    //define target : web or node or electron etc
    target: 'web',
    //define output => where to create our bundle in memory
    //create a path / build process that generate file for production
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    //[optional] define a plugin such as hot reloading , catching error
    plugins:[
        //Use CommonChunPlugin to create a separate bundle of vendor library so that they are cached separately.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //Create HTML file that includes reference to bundled JS..
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments : true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes:true,
                removeStyleLinkTypeAttributes:true,
                keepClosingSlash:true,
                minifyCSS:true,
                minifyJS:true,
                minifyURLs:true
            },
            inject: true
        }),
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