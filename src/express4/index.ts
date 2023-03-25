const express10 = require("express")
const path12 = require("node:path")
const app8 = express10()
const fs7 = require("node:fs/promises")
const cookieParser1 = require("cookie-parser")
// const userRouter = require("./routes/user")
// const goodsRouter = require("./routes/goods")
app8.set("views engine","ejs")
app8.set("views",path12.resolve(__dirname,"views"))

app8.use(express10.static(path12.resolve(__dirname,"public")) )
app8.use(express10.urlencoded({extended:true}))
app8.use(cookieParser1())

app8.get("/",(req: any,res: { render: (arg0: string) => void })=>{
    res.render("login.ejs")
})


app8.get("/cookie",(req: any,res: { cookie: (arg0: string, arg1: string) => void; send: (arg0: string) => void })=>{
    // 给客户端发送一个cookie
    res.cookie("username","admin")
    res.send("cookie已经发送")
})


app8.get("/hello",(req: { cookies: any },res: { send: (arg0: string) => void })=>{
    // req.cookies 用来读取客户端发回的cookie

    /**
     *  需要安装中间件来使得express可以解析cookie
     *      1.安装cookie-parser
     *      2.引入
     *      3.设置为中间件
     */
    console.log(req.cookies);
    
    res.send("hello路由")
})


app8.post("/login",(req: { body: { username: any; password: any } },res: { cookie: (arg0: string, arg1: any) => void; redirect: (arg0: string) => void; send: (arg0: string) => void })=>{
    /**
     * 现在这个登录可以说是形同虚设
     *      http协议是一个无状态的协议，
     *          服务器无法区分请求是否发送自同一个客户端
     * 
     *      cookie
     *          - cookie时http协议中用来解决无状态问题的技术
     *          - cookie的本质就是一个头
     *              - 服务器以响应头的形式将cookie发送给客户端
     *                  客户端收到以后会将其存储，并在下次向服务器发送请求时将其传回
     *                  这样服务器就可以根据服务器cookie识别出客户端
     */
    
    // 获取用户名和密码
    const {username,password} = req.body
    if (username === "admin" && password === "123123") {

        // 登陆成功后将用户名放入cookie
        res.cookie("username",username)
        res.redirect("/students/list")
    } else{
        res.send("用户名或密码错误")
    }
})
// app8.use("/user",userRouter)
// app8.use("/goods",goodsRouter)
app8.use("/students",require("./routes/students"))


app8.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})