//var $cart = document.querySelector('#cart tbody');
var calcButton = document.getElementById('calc');
var delButton = document.getElementsByClassName('btn btn-delete');


document.querySelector("#calc").onclick

// calcButton.onclick= function(){
  
//   let price = Number(document.querySelector("#price").innerText)
  
//   let quantity = Number(document.querySelector("#amount").value)
//   console.log(price*quantity)
//   let subtotal = document.querySelector("#subtotal") 
//   subtotal.innerText = price * quantity
  

  
//   return price*quantity
// }

calcButton.onclick = function(){

  let rows = document.getElementsByClassName('product');

  //console.log(rows);
  let subTotArray = [];
  let total = 0;

 for(let i = 0; i < rows.length; i++){

  //console.log(rows[i]);

   let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
  // everything is always a String if you grab it through the DOM so we have to coerce it into a number


  let quantity = Number(rows[i].querySelector('.qty > label > input').value);

  
  let subToteSpan = rows[i].querySelector('.subtot > span');
  

  subToteSpan.innerText = quantity * unitPrice;
  subTotArray.push(Number(subToteSpan.innerText))
  
  total += (quantity * unitPrice)
 }
 let totalSum = document.querySelector("body > h2 > span")

 

//  for(i = 0;i<subTotArray.length;i++){

//       total+=subTotArray[i]

//  }
totalSum.innerText = total
 
 
 console.log(total)
}



let deleteBtns = document.getElementsByClassName('btn-delete')

for(let i = 0 ; i <deleteBtns.length; i++){
  deleteBtns[i].onclick = deleteTheRow;

}
function deleteTheRow(event){
  event.currentTarget.parentElement.parentElement.remove();
}
document.getElementById('create').onclick = function(){

  let newName = document.querySelector('.new > td > input[type="text"]').value;

  let newPrice = document.querySelector('.new > td > input[type="number"]').value;

 
let newRowInnerHtml = `
<td class="name">
  <span>${newName}</span>
</td>
<td class="pu">
  $<span>${newPrice}</span>
</td>
<td class="qty">
  <label>
    <input type="number" value="0" min="0">
  </label>
</td>
<td class="subtot">
  $<span>0</span>
</td>
<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
`

let newRow = document.createElement('tr');
newRow.classList.add('product');

newRow.innerHTML = newRowInnerHtml;

newRow.querySelector('.btn-delete').onclick = deleteTheRow;

document.querySelector('tbody').appendChild(newRow);



 document.querySelector('.new > td > input[type="text"]').value = "";

document.querySelector('.new > td > input[type="number"]').value = "";

}