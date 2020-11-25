//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template:"./src/index.html",
    //设置生成的预览页面名称
    filename:"index.html",
    
})

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vuePlugin = new VueLoaderPlugin();

module.exports = {
    mode:"development",//可以设置为development(开发模式)，production(发布模式)
    plugins:[ htmlPlugin,vuePlugin ],
    devServer: {
        open: true
    },
    module : {
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader",
                // exclude为排除项，意思是不要处理 node_modules 中的 js 文件
                exclude:/node_modules/
            },
            {
                //test设置需要匹配的文件类型，支持正则
                test:/\.css$/,
                //use表示该文件类型需要调用的loader
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader','postcss-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader','postcss-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                // 小于等于 limit 大小的图片会被转为 base64
                use: [{
                    loader: 'url-loader?limit=272359',
                    options: {
                        esModule: false
                    }
                }]
            },
            { 
                test:/\.vue$/,
                loader:"vue-loader",
            },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }

        ]
    },
};

