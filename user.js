/**
 * Created by Administrator on 2016/10/25.
 */



function User() {
    var name;
    this.setName = function (_name) {
        name = _name;
    }
    this.sayHello = function () {
        console.log("name:" + name);
    }
}
function test() {
    console.log("test");
}


// 有时候我们只是想把一个对象封装到模块中，格式如下：
// module.exports = User;
exports.test = test;

