/**
 * Created by cwgraff on 1/6/16.
 */



console.log('JS coming through OK');

$(function() {

    newBal();

    $('.refresh').on('click', newBal);

});

function newBal(){

    $.ajax('/balance.js').then(function (response) {

    //console.log('successful call to balance', response);
    $('.writeHere').html(response);

});

}

