/**
 * 定时器的作用是间隔一段时间后，将函数放入到队列中
 */
setTimeout(()=>{
    console.log(1);
},0)
Promise.resolve(1).then(()=>{
    console.log(2);
})
console.log(3); 

// queueMicrotask() 用来向微任务队列中添加一个任务

/* 
    // 阅读下列代码，并说出执行结果：
    
    console.log(1);

    setTimeout(() => console.log(2));

    Promise.resolve().then(() => console.log(3));

    Promise.resolve().then(() => setTimeout(() => console.log(4)));

    Promise.resolve().then(() => console.log(5));

    setTimeout(() => console.log(6));

    console.log(7);


    结果:1,7,3,5,2,6,4
*/