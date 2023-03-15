/**
 *  * path
 *      - 表示的是路径
 *      - 通过path可以获取各种路径
 *      - 要使用path,先要先对其引用
 *      - 方法:
 *          path.resolve([...paths])
 *              - 用来生产一个绝对路径
 *              直接调用resolve,则返回当前的工作目录
 *              -如果以一个相对路径作为参数，
 *                 则resolve会自动将其转化为绝对路径
 *              - 一般会将一个绝对路径作为第一个参数
 *                  将相对路径作为第二个参数
 */

const path = require('path')
// const result1 = path.resolve()
// const result1 = path.resolve("./hello.js")
// const result1 = path.resolve(
//     "F:\\code\\学习\\Node.js\\src\\Path","./hello.js")

//最终形态   __dirname当前文件所在的绝对路径
const result1 = path.resolve(__dirname,'./hello.js')
console.log(result1)