/*
 * @Author: Emlice
 * @Date: 2019-09-06 11:15:21
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-06 16:54:01
 * @Description: 稳固从《Javascript语言精粹》吸收的知识
 */

 // 封装 method 方法便于扩展功能
 Function.prototype.method = function (eventNamme, fn) {
    if (!this.prototype[eventNamme]) this.prototype[eventNamme] = fn;
    return this
}

// 扩展 Number Integer 功能
Number.method('integer', function () {
    return Math[this > 0 ? 'floor': 'ceil'](this)
})

// 扩展函数柯里化功能
Function.method('currying', function () {
    let _args = Array.prototype.slice.call(arguments),
    _this = this;
    return function () {
        return _this.apply(null, _args.concat(...arguments))
    }
})

// 测试函数柯里化
const add = function () {
    const _args = Array.prototype.slice.call(arguments);
    return _args.reduce((a, b) => a + b)
}

const add_curry = add.currying(1);
const res = add_curry(6)            // 7