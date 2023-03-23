const express5 = require("express")
const path7 = require("node:path")
const app5 = express5()
// const Students = [
//     {
//         name:"孙悟空",
//         age:'18',
//         address:'花果山'
//     },
//     {
//         name:"猪八戒",
//         age:'28',
//         address:'高老庄'
//     },
//     {
//         name:"沙和尚",
//         age:'38',
//         address:'流沙河'
//     },
// ]
// 将ejs设置为默认的模板引擎
app5.set("view engine","ejs")

// 配置静态资源路径
app5.use(express5.static(path7.resolve(__dirname,"public")) )

//配置请求体解析
// app5.use(express5.urlencoded({extended : true}))
app5.use(express5.urlencoded())
// app5.use(express5.json())


app5.get("/hello",(req: any,res: { send: (arg0: string) => void })=>{
    res.send("hello")
})


// 模板引擎  

/**
 *  1. 安装ejs
 *  2.配置express的模板引擎
 *      注意，模板引擎需要被express渲染后才能使用
 *      app5.set("view engine","ejs")
 * 
 *      res.render()用来渲染一个模板引擎，并将其返回给浏览器
 */
app5.get("/students",(req: any,res: { render: (arg0: string, arg1: { name: string; age: number }) => void })=>{
    // 可以将一个对象作为render的第二个参数传递，这样在模板中可以访问对象中的数据

    // <%= %>在ejs中输出内容时，它会自动对字符串中的特殊字符进行转义 &lt
        // 这个设计主要是为了避免xss攻击
    // <%- %>不转义
    res.render("students",{name:'孙悟空',age:18})
})


// 可以在所以路由的后边配置错误路由
app5.use((req: any,res: { status: (arg0: number) => void; send: (arg0: string) => void })=>{
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("<h1>您访问的地址不存在</h1>")
})


app5.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})