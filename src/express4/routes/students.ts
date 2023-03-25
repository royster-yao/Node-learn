const express9 = require("express")
const router1 = express9.router1()
let Students2 = require("../data/students.json")
const fs6 = require("node:fs/promises")
const path11 = require("node:path")


// 学生列表的路由
router1.get("/list",(req: { cookies: { username: any } },res: { render: (arg0: string, arg1: { Students: any }) => void; redirect: (arg0: string) => void })=>{
    if (req.cookies.username) {
        res.render("students.ejs",{Students})
    }else{
        res.redirect("/")
    }

})

// 添加学生路由
router1.post("/add",(req: { body: { name: any; age: string | number; gender: any; address: any } },res: { redirect: (arg0: string) => void },next: () => void)=>{
    const id = Students.length + 1
    const newUser = {
        id,
        name:req.body.name,
        age:+req.body.age,
        gender:req.body.gender,
        address:req.body.address
    }

        Students.push(newUser)
        next()
})

// 删除用户
router1.get("/delete",(req: { query: { id: string | number } },res: any,next: () => void)=>{
    const id = +req.query.id
    Students = Students.filter((stu: { id: number }) => stu.id !== id)
    next()
})

// 修改
router1.post("/update-user",(req: { query: { id: number }; body: { name: any; age: number; gender: any; address: any } },res: any,next: ()=>void)=>{
    const id = +req.query.id 
    const {name ,age ,gender , address} = req.body
    const user = Students.find((item: { id: number }) => item.id = id) 
    user.name = name
    user.age = +age
    user.gender = gender
    user.address = address
    next()
})

router1.get("/to-update",(req: { query: { id: string | number } },res: { render: (arg0: string, arg1: { student: any }) => void })=>{
    const id = +req.query.id
    const student = Students.find((item: { id: number }) => item.id = id)
    res.render("update.ejs",{student})
})

router1.use((req: any,res: { redirect: (arg0: string) => void; send: (arg0: string) => void })=>{
    fs6.writeFile(path11.resolve(__dirname,
        "../data/students.json"),
    JSON.stringify(Students)).then(()=>{
    res.redirect("/students/list")
    }).catch(()=>{
        res.send("<h1>操作失败</h1>")
    })
})
module.exports = router1