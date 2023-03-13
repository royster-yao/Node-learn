async function fn5() {
    console.log(1);
    await console.log(2);
    console.log(3);
}
console.log(4);
fn5()