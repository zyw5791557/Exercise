/*
 * @Author: Emlice
 * @Date: 2019-09-12 16:47:46
 * @LastEditors: Emlice
 * @LastEditTime: 2019-09-12 17:09:25
 * @Description: 正则表达式
 */

// 验证 URL
// FIXME
const reg = /^((?:http|https):)?(\/{0,3})([a-zA-Z0-9.\-]+)*(?::[\d]+[^\d]?)?(\/)?([^:])*$/;
const str = 'https://www.baidu.com:8080/sss';
const res = reg.test(str);

console.log(res)