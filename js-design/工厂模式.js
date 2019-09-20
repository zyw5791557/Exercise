/*
 * @Author: Emlice
 * @Date: 2019-09-19 10:52:44
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-20 11:09:40
 * @Description: 工厂模式
 * @适用场景
 * 1.对象的构建十分复杂
 * 2.需要依赖不用环境创建不同的实例
 * 3.处理大量具有相同属性的小对象
 */

class Car {
    constructor (options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'white';
    }
}

class Truck {
    constructor (options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'used';
        this.color = options.color || 'black';
    }
}

class VehicleFactory {
    createVehicle (options) {
        if (options.vehicleType === 'car') {
            return new Car(options)
        } else if (options.vehicleType === 'truck') {
            return new Truck(options)
        }
    }
}

const factory = new VehicleFactory();

const car = factory.createVehicle({
    vehicleType: 'car',
    doors: 4,
    state: 'brand new',
    color: 'red'
});

const truck = factory.createVehicle({
    vehicleType: 'truck',
    doors: 2,
    state: 'used',
    color: 'white'
});

console.log(car)            //  { door: 4, state: 'brand new', color: 'red' }
console.log(truck)          //  { door: 2, state: 'used', color: 'white' }