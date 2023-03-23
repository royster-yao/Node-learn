const express3  = require('express')
const path6 = require('node:path') 
const app3 = express3()

// 创建一个数组来存储用户信息
const USERS = [
    {
        username:'yao',
        password:'123123',
        nickname:'小姚'
    },
    {
        username:'admin',
        password:'123321',
        nickname:'超级管理员'
    },
]

// 匹配静态资源的路径
app3.use(express3.static(path6.resolve(__dirname,"./public")))

// 引入解析请求体的中间件
app3.use(express3.urlencoded())

app3.post("/login",(req: {body: {username: string; password: string}},res: {send: (arg0 :string)=>void})=>{
    // 通过req.body来获取post请求的参数(请求体中的参数)
    // 默认情况下 express不会自动解析请求体,需要通过中间件来为其增加功能
    // console.log(req.body);
    const username = req.body.username
    const password = req.body.password
    // 获取到用户的用户名和密码，需要根据用户名和密码去用户的数组中查找用户
    // for (const user of USERS) {
    //     if(user.username  === username){
    //          // 用户存在接着检查用户的密码
    //          if(user.password === password){
    //             res.send(`<h1>登录成功 ${user.nickname}</h1>`)
    //             return 
    //          }
    //     }     
    // }
    // res.send(`<h1>用户名或密码错误</h1>`)

    const loginUser = USERS.find((item)=>{
        return item.username === username && item.password === password
    })
    if(loginUser){
        res.send(`<h1>登录成功 ${loginUser.nickname}</h1>`)
    }else{
        res.send(`<h1>登陆失败</h1>`)
    }
})
app3.post("/regist",(req: { body: { username: string; password: string; repwd: string; nickname: string } },res: { send: (arg0: string) => void })=>{
    // 获取用户输入的数据
    // console.log(req.body);
    const {username,password,repwd,nickname} = req.body
    // console.log(username,password,repwd,nickname);
    // 验证这些数据时否正确
    // 只验证用户名是否存在
    const user = USERS.find((item)=>{
        return item.username === username || item.nickname === nickname
    })
    // console.log(user);
    if (!user) {
        USERS.push({
            username,
            password,
            nickname
        })    
        res.send("<h1>恭喜您！注册成功！</h1>")
    }else{
        res.send("<h1>用户名已存在</h1>")

    }

})


app3.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})