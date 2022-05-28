var btnOrderCoffe = document.getElementById('btn-order');
var getOrderCoffe = document.getElementById('get-order-coffe');
window.onload = function () {
    btnOrderCoffe.innerHTML = 'Order Coffe';
    btnOrderCoffe.classList.add('active');
};
var arrPriceCoffe = [10, 15, 25];
var countArrCoffe = [0, 0, 0];
var arrOptionPriceCoffe = [18, 23, 33];
var countOptionArrCoffe = [0, 0, 0];
var costCoofe = document.getElementById('cost');
function createOrderBtnsCoffe(arrPriceCoffe, item, option) {
    var imgList = document.getElementsByClassName('img');
    var _loop_1 = function (i) {
        var countList = document.getElementsByClassName('count');
        imgList[i].addEventListener('click', function () {
            var costNum = Number(costCoofe.innerHTML);
            costCoofe.innerHTML = costNum += arrPriceCoffe[i];
            countArrCoffe[i]++;
            countList[i].innerHTML = "x".concat(countArrCoffe[i]);
            localStorage.setItem('countArr', JSON.stringify(countArrCoffe));
        });
    };
    for (var i = 0; i < arrPriceCoffe.length; i++) {
        _loop_1(i);
    }
    var btnMilk = document.getElementsByClassName('btn_milk');
    function addOption(btnCollection) {
        var _loop_2 = function (i) {
            btnCollection[i].addEventListener('click', function () {
                var costNum = Number(costCoofe.innerHTML);
                costCoofe.innerHTML = costNum += arrOptionPriceCoffe[i];
                countOptionArrCoffe[i]++;
                countOptionList[i].innerHTML = "x".concat(countOptionArrCoffe[i]);
                localStorage.setItem('countOptionArr', JSON.stringify(countOptionArrCoffe));
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
        for (var i = 0; i < arrPriceCoffe.length; i++) {
            var countList = document.getElementsByClassName('count');
            countArrCoffe[i] = 0;
            countOptionArrCoffe[i] = 0;
            costCoofe.innerHTML = 0;
            countList[i].innerHTML = '';
            countOptionList[i].innerHTML = '';
        }
    });
    getOrderCoffe.addEventListener('click', function () {
        localStorage.setItem('totalCost', costCoofe.innerHTML);
    });
}
createOrderBtnsCoffe(arrPriceCoffe, 'кофе', true);
