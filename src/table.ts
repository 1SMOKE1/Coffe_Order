const btnTable: HTMLElement = document.getElementById('btn-table');
const costField: HTMLElement = document.getElementById('cost');
let userInfo: any = [];
const totalCount: string = localStorage.getItem('countArr')
const totalCountOption: string = localStorage.getItem('countOptionArr')
const tableStart: any = document.getElementById('table-start');


function getCount(item: any, itemOption: any){
  item = JSON.parse(item);
  itemOption = JSON.parse(itemOption);
  let result: number[] = [...item, ...itemOption];
  return result.reduce((a:number, b:number) => a + b)
}


class User{
  name: string;
  drinks: number;
  cost: string;
  constructor(userName: string, userDrinks:number, userDrinksCost: string){
    this.name = userName;
    this.drinks = userDrinks;
    this.cost = userDrinksCost;
  }
  getUserData(){
    return [this.name, this.drinks, this.cost]
  }
}





window.onload = () => {
  btnTable.classList.add('active')
  
  userInfo.push(localStorage.getItem('name'))
  userInfo.push(getCount(totalCount,totalCountOption))
  userInfo.push(localStorage.getItem('totalCost'));
  
  const newUser = new User(userInfo[0],userInfo[1],userInfo[2])
  console.log(newUser.getUserData())
  
  let tableData: any = [];
  const newOrder: any = document.createElement('tr');
  tableStart.after(newOrder)
  for(let i = 0; i < 3; i++){
    tableData[i] = document.createElement('td');
    tableData[i].innerHTML = userInfo[i];
    newOrder.append(tableData[i])
  }
}


