var btnOrderCacao = document.getElementById('btn-order');
var getOrderCacao = document.getElementById('get-order-cacao');
window.onload = function () {
    btnOrderCacao.innerHTML = 'Order Cacao';
    btnOrderCacao.classList.add('active');
};
var arrPriceCacao = [12, 19, 30];
var countArrCacao = [0, 0, 0];
var arrOptionPriceCacao = [6, 9, 12];
var countOptionArrCacao = [0, 0, 0];
var costCacao = document.getElementById('cost');
function createOrderBtnsCacao(arrPrice, item, option) {
    var imgList = document.getElementsByClassName('img');
    var _loop_1 = function (i) {
        var countList = document.getElementsByClassName('count');
        imgList[i].addEventListener('click', function () {
            var costNum = Number(costCacao.innerHTML);
            costCacao.innerHTML = costNum += arrPrice[i];
            countArrCacao[i]++;
            countList[i].innerHTML = "x".concat(countArrCacao[i]);
        });
    };
    for (var i = 0; i < arrPrice.length; i++) {
        _loop_1(i);
    }
    var btnMilk = document.getElementsByClassName('btn_milk');
    function addOption(btnCollection) {
        var _loop_2 = function (i) {
            btnCollection[i].addEventListener('click', function () {
                var costNum = Number(costCacao.innerHTML);
                costCacao.innerHTML = costNum += arrOptionPriceCacao[i];
                countOptionArrCacao[i]++;
                countOptionList[i].innerHTML = "x".concat(countOptionArrCacao[i]);
            });
        };
        for (var i = 0; i < btnMilk.length; i++) {
            _loop_2(i);
        }
    }
    var countOptionList = document.getElementsByClassName('count-option');
    if (option) {
        addOption(btnMilk);
    }
    var btnClean = document.getElementById('clean');
    btnClean.innerHTML = "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0437\u0430\u043A\u0430\u0437\u0430\u043D\u0456 \u0447\u0430\u0448\u043A\u0438 \u0437 ".concat(item);
    btnClean.addEventListener('click', function () {
        for (var i = 0; i < arrPrice.length; i++) {
            var countList = document.getElementsByClassName('count');
            countArrCacao[i] = 0;
            countOptionArrCacao[i] = 0;
            costCacao.innerHTML = 0;
            countList[i].innerHTML = '';
            if (option) {
                countOptionList[i].innerHTML = '';
            }
        }
    });
    getOrderCacao.addEventListener('click', function () {
        localStorage.setItem('totalCost', costCacao.innerHTML);
    });
}
createOrderBtnsCacao(arrPriceCacao, 'какао', false);
