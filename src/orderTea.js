var btnOrderTea = document.getElementById('btn-order');
var getOrderTea = document.getElementById('get-order-tea');
window.onload = function () {
    btnOrderTea.innerHTML = 'Order Tea';
    btnOrderTea.classList.add('active');
};
var arrPriceTea = [4, 7, 10];
var countArrTea = [0, 0, 0];
var arrOptionPriceTea = [6, 9, 12];
var countOptionArrTea = [0, 0, 0];
var costTea = document.getElementById('cost');
function createOrderBtnsTea(arrPrice, item, option) {
    var imgList = document.getElementsByClassName('img');
    var _loop_1 = function (i) {
        var countList = document.getElementsByClassName('count');
        imgList[i].addEventListener('click', function () {
            var costNum = Number(costTea.innerHTML);
            costTea.innerHTML = costNum += arrPrice[i];
            countArrTea[i]++;
            countList[i].innerHTML = "x".concat(countArrTea[i]);
            localStorage.setItem('countArr', JSON.stringify(countArrTea));
        });
    };
    for (var i = 0; i < arrPrice.length; i++) {
        _loop_1(i);
    }
    var btnMilk = document.getElementsByClassName('btn_milk');
    function addOption(btnCollection) {
        var _loop_2 = function (i) {
            btnCollection[i].addEventListener('click', function () {
                var costNum = Number(costTea.innerHTML);
                costTea.innerHTML = costNum += arrOptionPriceTea[i];
                countOptionArrTea[i]++;
                countOptionList[i].innerHTML = "x".concat(countOptionArrTea[i]);
                localStorage.setItem('countOptionArr', JSON.stringify(countOptionArrTea));
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
            countArrTea[i] = 0;
            countOptionArrTea[i] = 0;
            costTea.innerHTML = 0;
            countList[i].innerHTML = '';
            countOptionList[i].innerHTML = '';
        }
    });
    getOrderTea.addEventListener('click', function () {
        localStorage.setItem('totalCost', costTea.innerHTML);
    });
}
createOrderBtnsTea(arrPriceTea, 'чай', true);
