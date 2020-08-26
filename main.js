const button = document.querySelector("button");

const mensagem = document.querySelector(".mensagens");

let img = document.querySelector("img");

let id = null;

let valorContagem = 10;

let tempoTotal = 11000;



const contagem = () => {
    mensagem.innerText = valorContagem;
    valorContagem--;
    button.innerText="Abortar a missão";
};

const fogueteParado = () => {
    img.setAttribute("src","https://media.istockphoto.com/photos/rocket-picture-id1094956130?k=6&m=1094956130&s=612x612&w=0&h=3FwhwAfQynqwOoHefzeh4aPz4i9FWw_twLh3kIE_fhk=");
}

const lancarFoguete = () => {
    img.setAttribute("src", "https://pa1.narvii.com/6249/56a2bace09eee42433f3e6f9f51b9649cc2ece60_hq.gif");
}

button.addEventListener("click", () => {
if(button.innerText==="Abortar a missão"){
        button.innerText = "Lançamento abortado!";
        clearInterval(id);
}else{
    id = setInterval(contagem,1000);
    setTimeout(() => {
        clearInterval(id);
         button.innerText="Lançamento iniciado! Reiniciar?";
         lancarFoguete();
         valorContagem = 10;
     }, tempoTotal); 
     fogueteParado();
}
});

