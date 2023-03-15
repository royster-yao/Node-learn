/**
 *  fs.readFile() 读取文件
 *  fs.appendFile() 创建新文件，或将数据添加到已有文件中
 *  fs.mkdir() 创建目录
 *  fs.rmdir() 删除目录
 *  fs.rm() 删除文件
 *  fs.rename() 重命名(剪切)
 *  fs.copyFile() 复制文件
 */



const fs3 = require("node:fs/promises")
const path3 = require("node:path")
// console.log(fs3);


/**
 *  mkdir可以接受一个 配置对象作为第二个参数，
 *  通过该对象可以对方法的功能进行配置
 *      recursive默认值为false
 *          -设置true后，会自动创建不存在的上一级目录
 */

// fs3.mkdir(path3.resolve(__dirname,"./hello/abc"),{recursive:true}).then(
//     (r: string)=>{
//         console.log("操作成功");
//     }
// ).catch(
//     (err: string) =>{
//         console.log("创建失败",err);
//     }

// )
// fs3.rmdir(path3.resolve(__dirname,"./hello"),{recursive:true}).then(
//     (r: string) =>{
//         console.log("删除成功");
//     }
// )

// fs3.rename(
//     path3.resolve(__dirname,"./haha.jpg"),
//     path3.resolve(__dirname,"./an.jpg"),
//     ).then(
//     (r: string)=>{
//         console.log("重命名成功");
//     }
//     )
