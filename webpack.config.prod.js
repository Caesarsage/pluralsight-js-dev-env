import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
        filename: '[name].[chunkhash].js'
    },
    //[optional] define a plugin such as hot reloading , catching error
    plugins:[
        //Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),
        //Hash the files using MD5 so that their name change when the content changes
        new WebpackMd5Hash(),
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
            inject: true,
            //properties you define here are available within the index.html file
            //using htmlWebpackplugin.options.varname
            trackJSToken: '8468112477554821a2b63a080c59c882'
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
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
};