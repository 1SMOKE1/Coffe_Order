
const btnOrderCoffe: HTMLElement = document.getElementById('btn-order');

const getOrderCoffe: HTMLElement = document.getElementById('get-order-coffe');

window.onload = () => {
  btnOrderCoffe.innerHTML = 'Order Coffe'
  btnOrderCoffe.classList.add('active')
}

const arrPriceCoffe: number[] = [10,15,25]
const countArrCoffe: any = [0,0,0];

const arrOptionPriceCoffe: number[] = [18,23,33]
const countOptionArrCoffe: any = [0,0,0];

const costCoofe: any = document.getElementById('cost');

function createOrderBtnsCoffe(arrPriceCoffe: number[], item: string, option: boolean){
  
  const imgList: HTMLCollection = document.getElementsByClassName('img')
  
  for(let i = 0; i < arrPriceCoffe.length; i++){
    const countList: HTMLCollection = document.getElementsByClassName('count');
    imgList[i].addEventListener('click', () => {
      let costNum: any = Number(costCoofe.innerHTML);
      costCoofe.innerHTML = costNum += arrPriceCoffe[i]
      countArrCoffe[i]++
      countList[i].innerHTML = `x${countArrCoffe[i]}`;
      localStorage.setItem('countArr', JSON.stringify(countArrCoffe))
    })
  }
  

  


  const btnMilk: HTMLCollection = document.getElementsByClassName('btn_milk');
  function addOption(btnCollection: HTMLCollection){
    for(let i = 0; i < btnMilk.length; i++){
      btnCollection[i].addEventListener('click', () => {
        let costNum: any = Number(costCoofe.innerHTML);
        costCoofe.innerHTML = costNum += arrOptionPriceCoffe[i]
        countOptionArrCoffe[i]++
        countOptionList[i].innerHTML = `x${countOptionArrCoffe[i]}`
        localStorage.setItem('countOptionArr', JSON.stringify(countOptionArrCoffe))
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
    for(let i = 0; i < arrPriceCoffe.length; i++){
      const countList: HTMLCollection = document.getElementsByClassName('count');
        countArrCoffe[i] = 0;
        countOptionArrCoffe[i] = 0;
        costCoofe.innerHTML = 0;
        countList[i].innerHTML = '';
        countOptionList[i].innerHTML = '';
    }
  })

  

  
  getOrderCoffe.addEventListener('click', () => {
    localStorage.setItem('totalCost', costCoofe.innerHTML)
  })
}

createOrderBtnsCoffe(arrPriceCoffe, 'кофе', true)

