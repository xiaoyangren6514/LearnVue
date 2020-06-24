// commonjs模块化规范
const {add,mul} = require("./js/mathUtis.js")
// ES6模块化规范
import {name} from "./js/info"

console.log(add(20,30));
console.log(mul(20,30));
console.log(name)


// 引入css
require("./css/test.css")

// 引入less
require("./css/special.less")

document.writeln("你好啊，不服打我啊")