/*
 * @Author: Emlice
 * @Date: 2019-09-09 11:09:43
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-09 17:45:44
 * @Description: 记忆
 */

// const fibonacci = function () {
//     // 闭包写一个内部记忆
//     const memo = [0, 1]
//     const _fib = function (n) {
//         let result = memo[n]
//         if (typeof result !== 'number') {
//             result = fn(n - 2) + fn(n - 1)
//             memo[n] = result
//         }
//         return result
//     }
//     return _fib
// }

// const res = fibonacci()(10)
// console.log(res)


/**
 * @description: 把上面的改造成通用的
 * @param memo{Array} 记忆初始数组
 * @param formula{Function} 公式
 * @return: 返回计算数值
 */

const memoizer = function (memo, formula) {
    var recur = function (n) {
        let result = memo[n]
        if (typeof result !== 'number') {
            result = formula(recur, n)
            memo[n] = result
        }
        return result
    }
    return recur
}

// 通过通用方式实现斐波那契
const fibonacci = memoizer([0,1], function (fn, n) {
    return fn(n - 2) + fn(n - 1)
})
console.log(fibonacci(5))           // 5

// 通过通用方式实现阶乘函数
const factorial = memoizer([1, 1], function (fn, n) {
    return n * fn(n - 1)
})

console.log(factorial(5))           // 120