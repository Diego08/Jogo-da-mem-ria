var imagensArray=[
	'./images/one.png',
	'./images/two.png',
	'./images/three.png',
	'./images/four.png',
	'./images/five.png',
	'./images/six.png',
	'./images/seven.png',
	'./images/eight.png',
	'./images/nine.png',
	'./images/game.png'
];


start();

function start() {
    var button = document.getElementById('start');
    button.onclick = function() {
        memoria()
    };
}

function memoria(){
    var tela = document.getElementById('images-content');

   for(i= 0; i<18; i++){
    var newImage = createImage();
    tela.appendChild(newImage)
   }
}

function createImage(){
    var cartas = document.createElement("img");
    cartas.src = "./images/game.png";
    return cartas;
}