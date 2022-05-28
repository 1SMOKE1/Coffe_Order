var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var btnTable = document.getElementById('btn-table');
var costField = document.getElementById('cost');
var userInfo = [];
var totalCount = localStorage.getItem('countArr');
var totalCountOption = localStorage.getItem('countOptionArr');
var tableStart = document.getElementById('table-start');
function getCount(item, itemOption) {
    item = JSON.parse(item);
    itemOption = JSON.parse(itemOption);
    var result = __spreadArray(__spreadArray([], item, true), itemOption, true);
    return result.reduce(function (a, b) { return a + b; });
}
var User = /** @class */ (function () {
    function User(userName, userDrinks, userDrinksCost) {
        this.name = userName;
        this.drinks = userDrinks;
        this.cost = userDrinksCost;
    }
    User.prototype.getUserData = function () {
        return [this.name, this.drinks, this.cost];
    };
    return User;
}());
window.onload = function () {
    btnTable.classList.add('active');
    userInfo.push(localStorage.getItem('name'));
    userInfo.push(getCount(totalCount, totalCountOption));
    userInfo.push(localStorage.getItem('totalCost'));
    var newUser = new User(userInfo[0], userInfo[1], userInfo[2]);
    console.log(newUser.getUserData());
    var tableData = [];
    var newOrder = document.createElement('tr');
    tableStart.after(newOrder);
    for (var i = 0; i < 3; i++) {
        tableData[i] = document.createElement('td');
        tableData[i].innerHTML = userInfo[i];
        newOrder.append(tableData[i]);
    }
};
