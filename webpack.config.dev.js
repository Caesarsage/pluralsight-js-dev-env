import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default{
    debug: true,
    devtool: 'inline-source-map', //help map code to original
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
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    //[optional] define a plugin such as hot reloading , catching error
    plugins:[
        new HtmlWebPackPlugin({
            //create html file that includes referrence to bundled JS
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
        })
    ],
    //Define file type by defining loaders
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_module/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
};