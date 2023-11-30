let dataArray = [];

function agregarEvento() {
  let inputText = document.getElementById("inputText");
  let Item = document.createElement("li");

  if (inputText.value.trim() !== "") {
    dataArray.push(inputText.value);
    Item.appendChild(document.createTextNode(inputText.value));
    document.getElementById("ulArray").appendChild(Item);
    inputText.value = ""; 
  }
}


function eliminarEvento() {
  if (dataArray.length > 0) {
    dataArray.pop(); 
    var list = document.getElementById("ulArray");
    list.removeChild(list.lastElementChild);
  }
}
