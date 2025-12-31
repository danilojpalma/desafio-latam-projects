"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuesto["default"](90000000, 80000);
var cliente1 = new _cliente["default"]('Juan', impuesto1);
var cliente2 = new _cliente["default"]('Pedro', new _impuesto["default"](100000000, 50000));
console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.nombre);
console.log(cliente2.calcularImpuesto());