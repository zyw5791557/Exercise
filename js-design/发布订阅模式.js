/*
 * @Author: Emlice
 * @Date: 2019-09-20 11:28:22
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-20 15:56:29
 * @Description: 发布订阅模式
 * @例子
 * 模块通信，事件的绑定与触发
 * 对象间的一种一对多的关系，让多个观察者同事监听某一个对象，
 * 当一个对象发生改变的时候，所有依赖它的对象都得到通知
 */

const Pubsub = (function() {
    let list = {}, 
    listen, remove, trigger;
    listen = function (event, fn) {
        if (!list[event]) {
            list[event] = []
        }
        list[event].push(fn)
    }
    remove = function (event, fn) {
        const fns = list[event]
        if (fns) {
            if (!fn) {
                delete list[event]
            } else {
                if (fns.length > 1) {
                    for (let i = 0; i < fns.length; i++) {
                        if (fns[i] === fn) {
                            fns.splice(i, 1)
                        }
                    }
                } else {
                    delete list[event]
                }
            }
        }
    }
    trigger = function (event) {
        const eventList = Array.prototype.slice.call(arguments)
        eventList.forEach(ev => {
            if (list[ev]) {
                list[ev].forEach(item => item())
            } 
        });
    }
    return {
        listen,
        remove,
        trigger
    }
})();

// 测试
const fn1 = function () {
    console.log('Hello World')
}
const fn2 = function () {
    console.log('斩风天下第一')
}

// 绑定
Pubsub.listen('xixi', fn1)
Pubsub.listen('haha', fn2)
// 解绑
// Pubsub.remove('xixi', fn1)
// 触发
Pubsub.trigger('xixi', 'haha')