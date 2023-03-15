/**
 *  核心模块
 *      process
 *          - 表示当前的node进程
 *          - 通过该对象可以获取进程的信息，或者对进程做各种操作
 *          - 如何使用
 *              1. 如何获取对象 process是一个全局变量 可以直接使用
 *              2. 有哪些属性和方法
 *                  process.exit() 结束当前进程,终止node
 *                  process.nextTick(callback[,...args])
 *                      - 将函数插入到 Tick队列中
 * 
 *          执行顺序：
 *              调用栈
 *              Tick队列
 *              微任务
 *              宏任务
 */

// console.log(process);
// console.log(111);
// process.exit()
// console.log(222);
// console.log(333);

setTimeout(()=>{
    console.log(1);
})
queueMicrotask(()=>{
    console.log(2);
})
process.nextTick(()=>{
    console.log(3);  //tick队列
})
console.log(4);