const template = require('art-template');
const ret = template.render(
    `我的名字是{{name}}，今年{{age}}岁`,
    {
    name:'Node',
    age:18,
    })
console.log(ret)

function dateFormat(date) {
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
}
// 将方法导入到模板中
template.defaults.imports.dateFormat = dateFormat;
const ret2 = template.render(
    `当前时间是：{{$imports.dateFormat(date)}}`,
    {
        date: new Date()
    })
console.log(ret2)