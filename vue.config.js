module.exports = {
    devServer: {

        // 当你请求是以/api开头的时候，则我帮你代理访问到http://localhost:3000
        // 例如：
        // /api/users  http://localhost:3000/api/users
        // 我们真实服务器接口是没有/api的 
        // apache服务器需要配置apche参见
        // https://blog.csdn.net/weixin_43297055/article/details/91359176

        proxy: { // 配置跨域
            '/api': {
　　　　　　　　　　//要访问的跨域的api的域名
                target: 'localhost:8008/',
                ws: true,//是否代理websockets
                changOrigin: true,// 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => { }
    },

    runtimeCompiler: true
}