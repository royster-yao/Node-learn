async function fn6() {
    console.log(1);
    await console.log(2);
    console.log(3);
}
console.log(4);
fn6()