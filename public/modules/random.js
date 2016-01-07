/**
 * Created by cwgraff on 1/5/16.
 */



var randomNum = function(){
    var min = 100;
    var max = 1000000;
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNum;