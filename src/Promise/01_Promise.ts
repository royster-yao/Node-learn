function sum(a: number,b: number,cb: (result: number)=> void ) {
    setTimeout(() => {
        cb(a + b)
    }, 1000);
}

const result = sum(123,456,(result)=>{
    console.log(result);
})

//创建promise
//创建promise时，构造函数中需要一个函数作为参数
// Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传进去
const promise = new Promise((reslove,reject)=>{
    // reslove 和 reject时两个函数，通过这两个函数可以向Promise中存储数据
    // reslove在执行正常时存储数据，reject在执行错误时存储数据
    // reslove('哈哈')
    // 通过函数向Promise中添加数据，好处就是可以用来添加异步调用的数据
    setTimeout(() => {
        reslove('哈哈')
    }, 2000);
})
// console.log(promise);

// 从Promise中读取数据
promise.then((result)=>{
    console.log('1',result);
},(reason)=>{
    console.log('2',reason);
})
