"use strict";
var Moji = require("./moji.core");
var _mojisyu = require("./default_mojisyu");
var assign = require("object-assign");
var mojisyu = assign({}, _mojisyu);


var moji = function (str) {
    return new Moji(mojisyu, str);
};

moji.addMojisyu = function (syu) {
    mojisyu = assign(mojisyu, syu);
};

module.exports = moji;
