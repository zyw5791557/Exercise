/*
 * @Author: Emlice
 * @Date: 2019-09-20 16:15:52
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-20 17:35:24
 * @Description: 适配器模式
 * @使用场景
 * 现有接口已经满足不了我们的业务需求，但又不能改动这个接口，可能是因为原系统有很多功能依赖于这个接口，
 * 这种场景我们可以很快的联想到通过适配器来实现新功能
 * @模式解析
 * 将一个类的接口(属性和方法)转换成客户需要的另一种接口
 * @注意
 * 一般情况下，减少使用适配器模式，多从接口的健壮性出发，扩展功能
 */

// 举个栗子 YUI 的get方法和 prototype 的$方法之间的转换

function $(){
	var elments = new Array();
	for(var i=0; i<arguments.length; i++){
		var element = arguments[i];
		if(typeof element == 'string'){
			element = document.getElementById(element);
		}
		if(arguments.length == 1){
			return element;
		}
		elments.push(element);
	}
	return elements;
}

YAHOO.util.Dom.get = function(el){
	if(YAHOO.lang.isString(el)){
		return document.getElementById(el);
	}
	if(YAHOO.lang.isArray(el)){
		var c = [];
		for(var i= 0, len=el.length; i<len; i++){
			c[c.length] = YAHOO.util.Dom.get(el[i]);
		}
		return c;
	}
	if(el){
		return el;
	}
	return null;
}

/**
 * 解析以上两个函数可以发现功能十分相似
 * $ 不指定参数，从 arguments 里面抓取，可以是字符串和HTML元素字符串
 * get 参数可以是字符串，HTML元素字符串和HTML元素字符串数组
 */

function $2getAdapter () {
    return YAHOO.util.Dom.get(arguments)
}

function get2$Adapter (el) {
    return $.apply(null, el instanceof Array ? el : [el])
}