/**
 *  ES 模块化
 */

//向外部导出内容
export let a = 10
export let b = '孙悟空'
export const c = {
    name:'猪八戒'
}

/**
 * *默认导出
 * @param a 
 * @param b 
 * @returns 
 */
export default function sum(a: number,b: number): number{
    return a + b
}