/*
 * @Author: Emlice
 * @Date: 2019-09-20 11:10:33
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-20 11:27:32
 * @Description: 装饰者模式
 * 装饰者模式是在不改变原对象自身的基础上，扩展对象的功能
 */

class Car {
    constructor () {
        this.cost = 20000
    }
    computeCost (price) {
        this.cost += price
    }
}

const car = new Car();

// 扩展小汽车功能
car.withACC = function () {
    const price = 5000;
    this.computeCost(price)
}
car.withL2 = function () {
    const price = 30000;
    this.computeCost(price)
}
car.withDPS = function () {
    const price = 5000;
    this.computeCost(price)
}

// 成本累计
car.withACC()
car.withL2()
car.withDPS()

// 打印价格
console.log(car.cost)