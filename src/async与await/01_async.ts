function fn(){
    return Promise.resolve(10)
}

// fn().then(r=>{
//     console.log(r);
// })


/**
 * 通过async创建异步函数
 *  异步函数的返回值会自动封装到一个Promise中返回
 */
async function fn2() {
    console.log(20);
}

// let result1 =fn2()
// console.log(result1);

function sum1(a: number, b: number): Promise<number>{
    return new Promise<number>(res =>{
        setTimeout(() => {
            res(a+b)
        }, 2000);
    })
}
console.log(sum1(55, 45))
async function fn3() {

    //当await去调用异步函数时，它会暂停代码的运行
    //  直到异步代码执行有结果时，才会将结果返回    
    // await 会阻塞异步函数后面的代码,外部代码不受影响
    // await 通过异步代码时，需要try-catch来处理异常    
   try {
    let result = await sum1(123,456)
    result = await sum1(result,8)
    console.log(result);
   } catch (error) {
    console.log('errors');
   }
}



async function fn5() {
    console.log(1);
    /* 
        当我们使用await调用函数后，当前函数后边的所有代码
            会在当前函数执行完毕后，被放入到微任务队里中
    */
    await console.log(2);
    // await后边的所有代码，都会放入到微任务队列中执行
    console.log(3);
}
fn5()
console.log(4);
