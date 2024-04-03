// test
// alert("Ciao")

//  Lista della spesa
const list = [
  "Latte",
  "Biscotti",
  "Pasta",
  "Formaggio",
  "Pane",
  "Uova",
  "Acqua",
  "Salsa",
  "Cereali",
];

// Selezione la ul dall'HTML
const listaSpesa = document.getElementById("ms_list");

//  Variabili d'appoggio 
let i = 0;
let listaPrint = "";
// console.log(listaPrint, typeof listaPrint);

//  Ciclo While
while (i < list.length) {
    
    console.log(list[i]);

    listaPrint += `<li>${list[i]}</li>`;
    i++;
}
console.log(listaPrint);

//  Stampa in Pagina
listaSpesa.innerHTML = listaPrint;



// Metodo FOR

// let listElem = document.querySelector(".shopping-list");
// console.log(listElem);
// let result = "";
// for (let i = 0; i < shoppingList.length; i++) {
//   const curItem = shoppingList[i]; // string
//   console.log(curItem);
//   result += `<li>${curItem}</li>`; // string
// }
//
// listElem.innerHTML = result;
