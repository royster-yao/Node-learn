/**
 *  fs (file System)
 *      - fs用来帮助node来操作磁盘中的文件
 *      -文件操作也是所谓的I/O操作
 *      - 要使用fs,先要先对其引用
 */

// const fs = require("fs")
const path1 = require("path")
//  同步的读取文件的方法,会阻塞后边代码的执行
//  当通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的形式返回
//  Buffer是一个临时用来存储数据的缓冲区
// const buf = fs.readFileSync(path1.resolve(__dirname,"./hello.txt"))
// console.log(buf.toString());


// 异步代码
// fs.readFile(path1.resolve(__dirname,"./hello.txt"),(err: string,buffer: string)=>{
//     if (err) {
//         console.log("出错了");
//     }else {
//         console.log(buffer.toString());
//     }
// })

// console.log('后续代码');


/**
 *  Promise版本的fs方法
 */
const fs = require("fs/promises")
fs.readFile(path1.resolve(__dirname,"./hello.txt"))
    .then((buffer: string) =>{
        console.log(buffer.toString);
    })
    .catch((e :string) =>{
        console.log(e);
    })

