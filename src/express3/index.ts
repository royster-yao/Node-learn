const express6 = require("express")
const path8 = require("node:path")
const app6 = express6()
const fs2 = require("node:fs/promises")
let Students  = require("./data/students.json")
// 将ejs设置为默认的模板引擎
app6.set("view engine","ejs")

// 配置静态资源路径
app6.use(express6.static(path8.resolve(__dirname,"public")) )

//配置请求体解析
// app6.use(express6.urlencoded({extended : true}))
app6.use(express6.urlencoded({extended:true}))
// app6.use(express6.json())
/**
 *   删除
 *      - 点击删除链接后，删除当前数据
 *      - 流程：
 *          1. 点击删除的链接       
 *          2. 向路由发送请求
 *          3. 路由怎么写？
 *              - 获取学生的id n
 *              - 删除id为n的学生
 *              - 将新的数组写入文件
 *              - 重定向到学生列表页面
 */
app6.get("/delete",(req: { query: { id: string | number } },res: { redirect: (arg0: string) => void })=>{
    // 获取要删除学生的id
    const id = +req.query.id
    // 根据id删除学生
    Students = Students.filter((stu: { id: number }) => stu.id !== id)
    // 将新的
    // 将新的数据写入到json文件中
    fs2.writeFile(path8.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{
    res.redirect("/students")
    }).catch(()=>{
        
    })
})

/**
 *  修改
 *      - 点击修改链接，显示已表单，要有该有修改的学生的信息
 *      - 用户对学生信息进行修改，修改后点击修改链接按钮提交表单
 *      - 流程：
 *          1.点击修改链接
 *          2.跳转到路由
 *              - 这个路由会返回一个页面，页面有一个表单，表单有需要修改学生的信息
 *          3.用户填写表单，点击按钮提交到一个新的路由
 *              - 获取学生信息，并对信息进行提交
 */
app6.post("/update-user",(req: { query: { id: number }; body: { name: any; age: number; gender: any; address: any } },res: any)=>{
    const id = +req.query.id 
    const {name ,age ,gender , address} = req.body
    // 修改学生信息
    const user = Students.find((item: { id: number }) => item.id = id) 
    user.name = name
    user.age = +age
    user.gender = gender
    user.address = address
    fs2.writeFile(path8.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{
    res.redirect("/students")
    }).catch(()=>{
        
    })

})


app6.get("/to-update",(req: { query: { id: string | number } },res: { render: (arg0: string, arg1: { student: any }) => void })=>{
    const id = +req.query.id
    // 获取需要修改的学生信息
    const student = Students.find((item: { id: number }) => item.id = id)
    // console.log(student);
    
    res.render("update",{student})
})


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