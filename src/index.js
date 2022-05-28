var btnHome = document.getElementById('btn-home');
window.onload = function () {
    btnHome.classList.add('active');
};
var userName = document.getElementById('name');
var btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function () {
    if (userName.value === 'null' || userName.value === '') {
        userName.style.border = '1px solid red';
    }
    else {
        userName.style.border = '1px solid green';
        localStorage.setItem('name', userName.value);
        location.href = 'chooseDrink.html';
    }
});
