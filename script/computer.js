// Arquivo script no modo player vs computer
const flipSound = document.getElementById('flipSound');
var single =  document.getElementById("single");
var nameTurnS =  document.getElementById("nameTurn");
var gameS =  document.getElementById("game"); 
var openMenuS =  document.getElementById("openMenu");
var rulesMenuS =  document.getElementById("rulesMenu");
var newGameMenuS =  document.getElementById("newGameMenu");
var quitS =  document.getElementById("quitS");
var scrRegras =  document.getElementById("scrRegras");
var scrStart =  document.getElementById("scrStart");
var scrRanking = document.getElementById('_scrRanking');
var screenGame= document.getElementById('__container');
var buttonS1 = document.getElementById('buttonS1'),
  buttonS2 = document.getElementById('buttonS2'),
  buttonS3 = document.getElementById('buttonS3');
var cont = 0;
var persName = document.getElementById('persName');
var scrloading = document.getElementById('scrloading');  
var playerTurn1 = document.getElementById('playerTurn1');
var input1 = document.querySelector('#inserName1')
var scrRegras =  document.getElementById("scrRegras");
var nomePers = localStorage.getItem("nome");
var pnome1 = document.getElementById('pnome1');
var pontParse = localStorage.getItem("pontV");         
var scoreV = document.getElementById('scoreV');
var pontParseM = localStorage.getItem("pontVM");         
var scoreVM = document.getElementById('scoreVM');
var victory1 = false;
var defeats = document.getElementById('defeats');

function flipGameSound() {
  flipSound.duration = 0.9
  flipSound.volume = 0.1
  flipSound.play()
}
single.onclick = () => {
  flipGameSound(); 
  scrStart.style.display = 'none';
  scrloading.style.display = 'block ';
  setTimeout(() => {
      scrloading.style.display = 'none ';
  }, 2800)
  setTimeout(() => {
    persName.style.display = 'block';
  }, 2800)
}

nameTurnS.onclick = () => {
  flipGameSound();
  axios.get(`https://api.github.com/users/${input1.value}`)
  .then(response => {
    document.querySelector('#inserName1').innerHTML = ` ${response.data.login}`
      if(response.data.name === null) {
        document.querySelector('#inserName1').innerHTML = `Nome não cadastrado`
      }
      else{
        document.querySelector('#inserName1').innerHTML = ` ${response.data.login}`
        scrRegras.style.display = 'block'; 
        persName.style.display = 'none';
        playerTurn1.innerHTML = `Your time ${input1.value} !`;
      }
  })
  .catch(() => {
    alert(`GitHub não encontrado`)
  })
}
buttonS1.value = 1;
buttonS2.value = 2;
buttonS3.value = 3;

function buttonS2click(parametro) {
  buttonS1.value = +parametro + 1;
  buttonS2.value = +parametro + 2;
  buttonS3.value = +parametro + 3;
}
onload = function (){
  pnome1.innerHTML = nomePers;
  scoreV.innerHTML = pontParse;
  scoreVM.innerHTML = pontParseM;
}
buttonS1.onclick = () => {
  flipGameSound();
  cont = buttonS1.value;
  if(buttonS1.value == cont && cont == 21){     
  
    nameV();    
    pontuacaov();

  }      
  if(buttonS1.value > 21 && cont > 21){
    screenGame.style.display = 'none';
    defeats.style.display = 'block'; 

    localStorage.setItem("nome", "computer");
    var nome = localStorage.getItem("nome");         
    var pnome1 = document.getElementById('pnome1');
    pnome1.innerHTML = nome;      
}
  buttonS2click(buttonS1.value);
  computerchoice(buttonS1.value);
}
buttonS2.onclick = () => {
  flipGameSound();
  cont = buttonS2.value;
  if(buttonS2.value == cont && cont == 21){          
    victory.style.display = 'block';
    screenGame.style.display = 'none';
    setTimeout(() => {
              victory.style.display = 'none';
              scrRanking.style.display = 'block';               
      }, 2800)
    nameV();  
    pontuacaov();
  }
  if(buttonS2.value > 21 && cont > 21){
    screenGame.style.display = 'none';
    defeats.style.display = 'block';
    localStorage.setItem("nome", "computer");
      var nome = localStorage.getItem("nome");      
      var pnome1 = document.getElementById('pnome1');
      pnome1.innerHTML = nome;
  }
  buttonS2click(buttonS2.value)
  computerchoice(buttonS2.value);
} 
buttonS3.onclick = () => {
  flipGameSound();
  cont = buttonS3.value;
  if(buttonS3.value == cont && cont == 21){
    victory.style.display = 'block';
    screenGame.style.display = 'none'; 
    
    setTimeout(() => {
      victory.style.display = 'none';
      scrRanking.style.display = 'block';
                            
      }, 2800)
    nameV();
    pontuacaov();

  }
  if(buttonS3.value > 21 && cont > 21){
    screenGame.style.display = 'none';
    defeats.style.display = 'block';

    localStorage.setItem("nome", "computer");
    var nome = localStorage.getItem("nome");        
    var pnome1 = document.getElementById('pnome1');
    pnome1.innerHTML = nome;  
  }
  buttonS2click(buttonS3.value)
  computerchoice(buttonS3.value);
}
function pontuacaov(){
    
  localStorage.setItem("pontV", vic);
  var pontV = localStorage.getItem("pontV");         
  var scoreV = document.getElementById('scoreV');
  victory1 = true;
  if(victory1 == true){
      var x = 0;
      pontV = parseInt(pontV) + x;  
  }
  scoreV.innerHTML = pontV;  
}
function nameV(){
  localStorage.setItem("nome", input1.value);
  var nome = localStorage.getItem("nome");         
  var pnome1 = document.getElementById('pnome1');
  pnome1.innerHTML = nome;
}
function computerchoice(cont){
  var numberPC = document.getElementById('numberPC');
  playerTurn1.innerHTML = null;
  playerTurn1.innerHTML = "Computer is playing";
  var x = new Array(+cont + 1, +cont + 2, +cont + 3),
      y = x[Math.floor(Math.random()*3)]

  setTimeout(() => {
    buttonS1.value = y + 1;
    buttonS2.value = y + 2;
    buttonS3.value = y + 3;  
    playerTurn1.innerHTML = `Your time ${input1.value} !`;  
  },3000)
  setTimeout(() => {       
      numberPC.innerHTML = `${y} `;  
  },2500)   
}
gameS.onclick = () => { 
  flipGameSound();
  scrRegras.style.display = 'none';
  menuAtalho.style.display = 'block'; 
  screenGame.style.display = 'block';  
}
menuAtalho.onclick = () => {
  flipGameSound();
  screenGame.style.display = 'none';
  menuOpt.style.display = 'block'; 
  menuAtalho.style.display = 'none';  
  defeats.style.display = 'none';
  scrRanking.style.display = 'none'; 
  victory.style.display = 'none';
}
openMenuS.onclick = () => {
  flipGameSound();
  screenGame.style.display = 'none';
  menuOpt.style.display = 'block'; 
  menuAtalho.style.display = 'none';  
  defeats.style.display = 'none';
  scrRanking.style.display = 'none'; 
}
newGameMenuS.onclick = () => {
  flipGameSound();
  var menuOpt =  document.getElementById("menuOpt");
  screenGame.style.display = 'block';
  menuOpt.style.display = 'none';  
  menuAtalho.style.display = 'block'; 
  buttonS1.value = 1;
  buttonS2.value = 2; 
  buttonS3.value = 3;
} 
rulesMenuS.onclick = () => {
  flipGameSound();
  menuOpt.style.display = 'none';
  scrRegras.style.display = 'block';
}
//function para retornar ao menu start com os modos de jogo
returStartS.onclick= () => {
  menuAtalho.style.display = 'none';
  menuOpt.style.display = 'none';
  scrStart.style.display = 'block'; 
  scrStart.style.display = 'flex'; 
}
//function para sair do jogo singleplayer
quitS.onclick = () => {
  flipGameSound();
  var quitGameS =  document.getElementById("quitGameS");
  menuAtalho.style.display = 'none';
  menuOpt.style.display = 'none';  
  quitGameS.innerHTML = "bye see you next time!";
  quitGameS.style.fontSize = "50px";
}




