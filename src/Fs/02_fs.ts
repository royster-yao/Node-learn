const fs1 = require("fs/promises")
const path2 = require("path")
/**
 *  fs.readFile() 读取文件
 *  fs.appendFile() 创建新文件，或将数据添加到已有文件中
 *  fs.mkdir() 创建目录
 *  fs.rmdir() 删除目录
 *  fs.rm() 删除文件
 *  fs.rename() 重命名
 *  fs.copyFile() 复制文件
 */

// fs1.appendFile(
//     path2.resolve(__dirname,"./hello123.txt"),
//     "我真帅"
//     ).then((r: string)=>{
//         console.log("添加成功");
//     })

// 复制一个文件
// C:\Users\royster\Pictures\Saved Pictures
fs1.readFile("C:\\Users\\royster\\Pictures\\Saved Pictures\\road.jpg")
.then((buffer: any)=>fs1.appendFile(
    path2.resolve(__dirname,"./haha.jpg"),
    buffer
    )
)
.then(()=>{
    console.log("操作结束");
})

