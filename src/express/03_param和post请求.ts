const express2  = require('exprqueryess')
const path5 = require('node:path') 
const app = express2()

// 匹配静态资源的路径
app.use(express2.static(path5.resolve(__dirname,"./public")))

// 引入解析请求体的中间件
app.use(express2.urlencoded())
// 添加一个路由，可以读取get请求的参数
app.get("/login",(req: { query: { username: string; password: string } },res: { send: (arg0: string) => void })=>{
    // 获取用户发送的数据
    // 通过req.query来获取查询字符串中的数据
    if (req.query.username === "yao"&& req.query.password === "yao123") {
        res.send("<h1>欢迎您回来！登陆成功</h1>")
    }else{
        res.send("<h1>用户名或密码错误！</h1>")
    }
}) 

app.post("/login",(req: {body: {username: string; password: string}},res: {send: (arg0 :string)=>void})=>{
    // 通过req.body来获取post请求的参数(请求体中的参数)
    // 默认情况下 express不会自动解析请求体,需要通过中间件来为其增加功能
    // console.log(req.body);
    const username = req.body.username
    const password = req.body.password
    if (username === "yao" && password === "yao123") {
        res.send("<h1>post请求已经收到</h1>")
    }else{
        res.send("<h1>登录失败</h1>")

    }
})

// get请求发送参数的第二种方式
// /hello/:id 表示当用户访问 /hello/xxx 时会触发
// 在路径中以冒号命名的部分我们称为param，在get请求中可以被解析为请求参数
// param一般不会传递特别复杂的参数
app.get("/hello/:id",(req: {params: string},res: {send: (arg0: string)=> void})=>{
    // 约定由于配置
    // 可以通过req.params属性来获取这些参数
    console.log(req.params);
    res.send('<h1>这是hello路由</h1>')
})

app.listen(3000,()=>{
    console.log("服务器启动成功,请访问http://localhost:3000");
})