const itemInput = document.getElementById('itemInput')
const shoppingList = document.getElementById('shoppingList')

function addTask(){
  if(itemInput.value === ''){
    alert("Você precisa digitar alguma coisa!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = itemInput.value;
    shoppingList.appendChild(li);
    let span = document.createElement ("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  itemInput.value = "";
  saveData();
}

shoppingList.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
},false);

function saveData(){
  localStorage.setItem("data", shoppingList.innerHTML);
}
function showTask(){
  shoppingList.innerHTML = localStorage.getItem("data");
}
showTask();
