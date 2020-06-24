// commonjs模块化规范
const {add,mul} = require("./mathUtis.js")
// ES6模块化规范
import {name} from "./info"

console.log(add(20,30));
console.log(mul(20,30));
console.log(name)
