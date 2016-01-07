/**
 * Created by cwgraff on 1/5/16.
 */
var random = require('./random');
var cashMoney = require('./currency');

var money = function(){
    return cashMoney(random())
};

var message = function(){
    return ('Account balance:\n')
};

exports.money = money;
exports.message = message;
