/*const express7 = require("express")
const path9 = require("node:path")
const app7 = express7()
const fs4 = require("node:fs/promises")
let Students  = require("./data/students.json")
app7.set("view engine","ejs")


app7.use(express7.static(path9.resolve(__dirname,"public")) )

app7.use(express7.urlencoded({extended:true}))

app7.get("/delete",(req: { query: { id: string | number } },res: { redirect: (arg0: string) => void })=>{
    const id = +req.query.id
    Students = Students.filter((stu: { id: number }) => stu.id !== id)
    // 将新的
    // 将新的数据写入到json文件中
    fs4.writeFile(path9.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{
    res.redirect("/students")
    }).catch(()=>{
        
    })
})


app7.post("/update-user",(req: { query: { id: number }; body: { name: any; age: number; gender: any; address: any } },res: any)=>{
    const id = +req.query.id 
    const {name ,age ,gender , address} = req.body
    const user = Students.find((item: { id: number }) => item.id = id) 
    user.name = name
    user.age = +age
    user.gender = gender
    user.address = address
    fs4.writeFile(path9.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{
    res.redirect("/students")
    }).catch(()=>{
        
    })

})


app7.get("/to-update",(req: { query: { id: string | number } },res: { render: (arg0: string, arg1: { student: any }) => void })=>{
    const id = +req.query.id
    const student = Students.find((item: { id: number }) => item.id = id)
    
    res.render("update",{student})
})


app7.get("/hello",(req: any,res: { send: (arg0: string) => void })=>{
    res.send("hello")
})


app7.get("/students",(req: any,res: { render: (arg0: string, arg1: { Students: { id: number; name: string; gender: string; age: number; address: string }[] }) => void })=>{

    res.render("students",{Students})
})


app7.post("/add-stu",(req: { body: any },res: any)=>{
    const id = Students.length + 1
    const newUser = {
        id,
        name:req.body.name,
        age:+req.body.age,
        gender:req.body.gender,
        address:req.body.address
    }

        Students.push(newUser)

    fs4.writeFile(path9.resolve(__dirname,
        "./data/students.json"),
    JSON.stringify(Students)).then(()=>{

    res.redirect("/students")
    }).catch(()=>{
        
    })


})

app7.use((req: any,res: { status: (arg0: number) => void; send: (arg0: string) => void })=>{
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("<h1>您访问的地址不存在</h1>")
})

app7.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})*/