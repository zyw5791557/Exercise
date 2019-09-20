/*
 * @Author: Emlice
 * @Date: 2019-09-16 16:20:30
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-20 11:07:50
 * @Description: 单例模式
 * 单例模式是指只能实例化一次的对象，如果已经实例化过，就会返回这个实例化对象的引用
 */
 
let intance = null;

function Singleton () {
    if (intance) {
        return intance
    }
    intance = this
    this.name = 'Emlice';
    this.age = 20;
    return intance;
}

const intance1 = new Singleton();
const intance2 = new Singleton();

console.log(intance1)               //  { name: 'Emlice', age: 20 }
console.log(intance2)               //  { name: 'Emlice', age: 20 }
console.log(intance1 === intance2)  //  true
