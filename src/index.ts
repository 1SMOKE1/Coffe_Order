const btnHome: HTMLElement = document.getElementById('btn-home')

window.onload = () => {
  btnHome.classList.add('active')
}
const userName: any = document.getElementById('name');
const btnStart: HTMLElement = document.getElementById('btn-start');
btnStart.addEventListener('click', () => {
  if(userName.value === 'null' || userName.value === ''){
    userName.style.border = '1px solid red';
  }
  else{
    userName.style.border = '1px solid green';
    localStorage.setItem('name', userName.value)
    location.href = 'chooseDrink.html';
  }
  
})

