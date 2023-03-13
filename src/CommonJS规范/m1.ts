// let a = 10
// let b = 20

// console.log('我是m1模块');

// exports 一个一个暴露
// exports.a = "孙悟空"
// exports.b = {name:'猪八戒'}
// exports.c = function fn(){
//     console.log('唐僧');
// }

module.exports = {
    a:'哈哈',
    b:[1,5,6,9],
    c:()=>{
        console.log(111);
    }
}