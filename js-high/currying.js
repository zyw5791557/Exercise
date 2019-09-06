/*
 * @Author: Emlice
 * @Date: 2019-09-05 17:22:58
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-06 15:23:06
 * @Description: 函数柯里化
 */
function add () {
    // 这里把类数组 arguments 转换成数组
    let _args = Array.prototype.slice.apply(arguments);
    // 这里进行参数累加 | 注意这里不能使用闭包，否则参数一直都是外层的 arguments
    let _adder = function () {
        _args.push(...arguments);
        return _adder
    }
    // 对象计算的时候隐式调用 toString 方法
    _adder.toString = () => {
        return _args.reduce((a, b) => a + b)
    }
    // 返回累加函数
    return _adder
}


add(1, 2, 3)               // 6
add(1, 2, 3)(4, 5)         // 15
add(1)(2)(3)(4)(5)         // 15