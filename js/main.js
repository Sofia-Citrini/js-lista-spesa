const prodotti = ["Pane", "Pasta", "Latte", "Caffe", "Miele"];
console.log(prodotti);

const listaSpesa = document.querySelector(".lista-spesa");

let i = 0;

while (i < prodotti.length) {
    console.log(prodotti [i]);

    listaSpesa.innerHTML += `<li class="list-group-item">${prodotti [i]}</li>`;
    
    i++;
}