
const btnOrderTea: HTMLElement = document.getElementById('btn-order');

const getOrderTea: HTMLElement = document.getElementById('get-order-tea');

window.onload = () => {
  btnOrderTea.innerHTML = 'Order Tea'
  btnOrderTea.classList.add('active')
}

const arrPriceTea: number[] = [4,7,10]
const countArrTea: number[] = [0,0,0];


const arrOptionPriceTea: number[] = [6,9,12]
const countOptionArrTea: number[] = [0,0,0];

const costTea: any = document.getElementById('cost');

function createOrderBtnsTea(arrPrice: number[], item: string, option: boolean){
  
  const imgList: HTMLCollection = document.getElementsByClassName('img')
  for(let i = 0; i < arrPrice.length; i++){
    const countList: HTMLCollection = document.getElementsByClassName('count');
    imgList[i].addEventListener('click', () => {
      let costNum: any = Number(costTea.innerHTML);
      costTea.innerHTML = costNum += arrPrice[i]
      countArrTea[i]++
      countList[i].innerHTML = `x${countArrTea[i]}`
      localStorage.setItem('countArr', JSON.stringify(countArrTea))
    })
  }
  


  const btnMilk: HTMLCollection = document.getElementsByClassName('btn_milk');
  function addOption(btnCollection: HTMLCollection){
    for(let i = 0; i < btnMilk.length; i++){
      btnCollection[i].addEventListener('click', () => {
        let costNum: any = Number(costTea.innerHTML);
        costTea.innerHTML = costNum += arrOptionPriceTea[i]
        countOptionArrTea[i]++
        countOptionList[i].innerHTML = `x${countOptionArrTea[i]}`
        localStorage.setItem('countOptionArr', JSON.stringify(countOptionArrTea))
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
        countArrTea[i] = 0;
        countOptionArrTea[i] = 0;
        costTea.innerHTML = 0;
        countList[i].innerHTML = '';
        countOptionList[i].innerHTML = '';
    }
  })
  getOrderTea.addEventListener('click', () => {
    localStorage.setItem('totalCost', costTea.innerHTML)
  })
}

createOrderBtnsTea(arrPriceTea ,'чай', true)