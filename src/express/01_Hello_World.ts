/**
 *  express 是node中的服务器软件
 *      通过express可以快速在node中搭建一个web服务器
 *  - 使用步骤：
 *      1.创建并初始化项目
 *      2.安装express
 *      3.创建index.js并编写代码
 */

const express = require("express")

// 获取服务器的实例
const app1 = express()

/**
 *  希望服务器可以正常访问，则需要为服务器设置路由
 *      路由可以根据不同的请求方式和请求地址来处理用户的请求
 * 
 *      app1.Method(...)
 *          Method可以是get或post
 *  中间件
 *      - 在express使用app1.use来定义一个中间件
 *          中间件作用和路由很像，用法也很像
        - 和路由的区别
            1.会匹配所有请求
            2.路径设置父目录
 */

    // next() 是回调函数的第三个参数，它是一个函数，可以触发后续的中间件
app1.use("/",(req: any,res: { send: (arg0: string) => void; },next: ()=>void)=>{
    console.log("111");
    // res.send("<h1>111</h1>")
    next() // 放行  
})
app1.use("/",(req: any,res: { send: (arg0: string) => void; },next: ()=>void)=>{
    console.log("222");
    // res.send("<h1>222</h1>")
    next()
})
app1.use("/",(req: any,res: { send: (arg0: string) => void; })=>{
    console.log("333");
    res.send("<h1>333</h1>")
})

// http://localhost:3000
// 路由的回调函数执行时，会收到三个参数

// app1.get("/",(request: object,response: any)=>{
//     console.log("有人访问我了");

    // 在路由中，应该做两件事
    // 读取用户的请求(request)
    // req 表示的是用户的请求信息,可以通过request获取用户传递数据

    // console.log(request);

    // 根据用户的请求返回响应(response)
    // response表示的服务器发送给客户端的响应信息
    // 可以通过response来向客户端返回数据
// /**
//  *  @sendStatus 向客户端发送响应状态码
//  *  @status 用来设置响应状态码，但是并不发送
//  *  @send 设置发送响应体
//  *  *response.sendStatus (200)
//  */
    
//     response.status(404)
//     response.send("你的请求没问题，但是就是不给你看")
// })

//启动服务器
// app1.listen(端口号) 用来启动服务器
// 服务器启动后，我们便可以3000端口来访问
// 协议名://ip地址:端口号/路径
// http://localhost:3000
// http://127.0.0.1:3000
app1.listen(3000,()=>{
    console.log("服务器启动成功！请访问http://localhost:3000");
})
