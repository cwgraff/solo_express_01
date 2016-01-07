/**
 * Created by cwgraff on 1/5/16.
 */

var makeMoney = function addCommas(intNum) {
        return ('$' + intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

module.exports = makeMoney;