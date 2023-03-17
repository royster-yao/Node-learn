const express1 = require("express")
const path4 = require("node:path")
// 创建app2实例
const app2 = express1()

/**
 *      目前，服务器代码修改后要重启
 *          我们希望有一种方式，可以自动监视代码的修改
 *          代码修改后可以自动重启服务器
 *      要实现这个功能，我们要安装一个模块nodemon
 *          使用方法：
 *              1.安装(全局) npm i nodemon (-g)
 *                  项目安装 npm i nodemon -D
 *              2.启动 
 *                  nodemon 运行index.js
 *                  nodemon xxx 运行指定的js(ts)文件
 *                  npx nodemon xxx 开发依赖时运行指定的js(ts)文件
 */
// use() 中间件
/**
 *  服务器中的代码，对于外部都是不可见的
 *      所以我们写的html页面，浏览器无法直接访问
 *      如果希望浏览器可以访问，则需要将页面所在的目录设置静态资源目录
 *  
 */


// 设置static中间件后，浏览器访问时，会自动去public目录寻址是否有匹配的静态资源
app2.use(express1.static(path4.resolve(__dirname,"./public")))
// 配置路由
app2.get("/",(req: any,res: { send: (arg0: string) => void; })=>{
    /**
     *  希望用户返回根目录，可以给用户返回一个网页
     */
    // res.send(`
    //         <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>返回的网页</title>
    //     </head>
    //     <body>
    //         <h1>网页的标题</h1>
    //     </body>
    //     </html>`)
        res.send("怎么办嘛?")
    })

app2.get("/login",(req: { query: any },res: { send: (arg0: string) => void })=>{
    // 获取到用户输入的用户名和密码
    // req.query表示查询字符串中的请求参数
    // console.log(req.query.username);
    // console.log(req.query.password);
    if (req.query.username === "yao" && req.query.password === "yao123") {
        res.send("登陆成功")
    }else{  
        res.send("用户名或密码错误")
    }
    
})
// 启动服务器
app2.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})