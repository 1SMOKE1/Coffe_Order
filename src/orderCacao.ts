
const btnOrderCacao: HTMLElement = document.getElementById('btn-order');

const getOrderCacao: HTMLElement = document.getElementById('get-order-cacao');

window.onload = () => {
  btnOrderCacao.innerHTML = 'Order Cacao';
  btnOrderCacao.classList.add('active')
}

const arrPriceCacao: number[] = [12,19,30];
const countArrCacao: number[] = [0,0,0];

const arrOptionPriceCacao: number[] = [6,9,12]
const countOptionArrCacao: number[] = [0,0,0];

const costCacao: any = document.getElementById('cost');


function createOrderBtnsCacao(arrPrice: number[], item: string, option: boolean){
  
  const imgList: HTMLCollection = document.getElementsByClassName('img')
  for(let i = 0; i < arrPrice.length; i++){
    const countList: HTMLCollection = document.getElementsByClassName('count');
    imgList[i].addEventListener('click', () => {
      let costNum: any = Number(costCacao.innerHTML);
      costCacao.innerHTML = costNum += arrPrice[i]
      countArrCacao[i]++
      countList[i].innerHTML = `x${countArrCacao[i]}`
    })
  }
  


  const btnMilk: HTMLCollection = document.getElementsByClassName('btn_milk');
  function addOption(btnCollection: HTMLCollection){
    for(let i = 0; i < btnMilk.length; i++){
      btnCollection[i].addEventListener('click', () => {
        let costNum: any = Number(costCacao.innerHTML);
        costCacao.innerHTML = costNum += arrOptionPriceCacao[i]
        countOptionArrCacao[i]++
        countOptionList[i].innerHTML = `x${countOptionArrCacao[i]}`
      })
    }
  }
  const countOptionList: HTMLCollection = document.getElementsByClassName('count-option')
  if(option){
    addOption(btnMilk)
  }
    
  

  
  const btnClean: HTMLElement = document.getElementById('clean');
  btnClean.innerHTML = `Очистити заказані чашки з ${item}`
  btnClean.addEventListener('click', () => {
    for(let i = 0; i < arrPrice.length; i++){
      const countList: HTMLCollection = document.getElementsByClassName('count');
        countArrCacao[i] = 0;
        countOptionArrCacao[i] = 0;
        costCacao.innerHTML = 0;
        countList[i].innerHTML = '';
        if(option){
          countOptionList[i].innerHTML = '';
        }
    }
  })
  getOrderCacao.addEventListener('click', () => {
    localStorage.setItem('totalCost', costCacao.innerHTML)
  })
}

createOrderBtnsCacao(arrPriceCacao, 'какао', false)