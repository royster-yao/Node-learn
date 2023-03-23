const express6 = require("express")
const path8 = require("node:path")
const app6 = express6()
const fs2 = require("node:fs/promises")
const Students  = require("./data/students.json")
// 将ejs设置为默认的模板引擎
app6.set("view engine","ejs")

// 配置静态资源路径
app6.use(express6.static(path8.resolve(__dirname,"public")) )

//配置请求体解析
// app6.use(express6.urlencoded({extended : true}))
app6.use(express6.urlencoded())
// app6.use(express6.json())


app6.get("/hello",(req: any,res: { send: (arg0: string) => void })=>{
    res.send("hello")
})


app6.get("/students",(req: any,res: { render: (arg0: string, arg1: { Students: { id: number; name: string; gender: string; age: number; address: string }[] }) => void })=>{

    res.render("students",{Students})
})


app6.post("/add-stu",(req: { body: any },res: any)=>{
    const id = Students.length + 1
    // 获取用户填写的信息
    const newUser = {
        id,
        name:req.body.name,
        age:+req.body.age,
        gender:req.body.gender,
        address:req.body.address
    }
    //验证用户信息
    // 将用户信息添加到数组中
        Students.push(newUser)
    // res.send("添加成功")
    // 直接在添加路由中渲染ejs，会面临表单重复提交的问题
    // res.render("students",{Students})

    // 将新的数据写入到json文件中
    fs2.writeFile(path8.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{
    //res.redirect()用来发起请求重定向
    // 重定向的作用是告诉浏览器向另一个地址再发起一次请求
    res.redirect("/students")
    }).catch(()=>{

    })


})

// 可以在所以路由的后边配置错误路由
app6.use((req: any,res: { status: (arg0: number) => void; send: (arg0: string) => void })=>{
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("<h1>您访问的地址不存在</h1>")
})


app6.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})