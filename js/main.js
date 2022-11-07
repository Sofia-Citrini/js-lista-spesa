const prodotti = ["pane", "pasta", "latte", "caffe", "miele"];
console.log(prodotti);

const listaSpesa = document.querySelector(".lista-spesa");

let i = 0;

while (i < prodotti.length) {
    console.log(prodotti [i]);

    listaSpesa.innerHTML += `<li>${prodotti [i]}</li>`;
    
    i++;
}