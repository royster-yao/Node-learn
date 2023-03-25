const express7 = require("express")
const path9 = require("node:path")
const app7 = express7()
const fs4 = require("node:fs/promises")
const cookieParser = require("cookie-parser")
// const userRouter = require("./routes/user")
// const goodsRouter = require("./routes/goods")
app7.set("views engine","ejs")
app7.set("views",path9.resolve(__dirname,"views"))

app7.use(express7.static(path9.resolve(__dirname,"public")) )
app7.use(express7.urlencoded({extended:true}))
app7.use(cookieParser())

app7.get("/set",(req: any,res: {
        cookie: (arg0: string, arg1: string, arg2: {
            // expires:new Date(2023,3,30)
            maxAge: number
        }) => void; send: (arg0: string) => void
    })=>{
    /**
     * cookie是有有限期
     *  - 默认情况下cookie的有效期就是一次会话(session)
     *      会话就是一次从打开到关闭浏览器的过程
     *  - maxAge用来设置cookie有效时间，单位是毫秒 
     */
    res.cookie("name","sunwukong",{
        // expires:new Date(2023,3,30)
        maxAge:1000*60*60*24*30
    })
    res.send("设置cookie")
})

app7.get("/get",(req: { cookies: { name: any } },res: { send: (arg0: string) => void })=>{
    const name = req.cookies.name
    console.log(name);
    res.send("读取cookie")
    
})

app7.get("/delete-cookie",(req: any,res: { cookie: (arg0: string, arg1: string, arg2: { maxAge: number }) => void; send: (arg0: string) => void })=>{
    // cookie一旦发送给浏览器就不能修改了
    // 但是可以通过发送新的同名cookie来替换旧的cookie，从而达到修改的目的
    res.cookie("name","",{
        maxAge:0
    })
    res.send("删除cookie")
})

app7.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})