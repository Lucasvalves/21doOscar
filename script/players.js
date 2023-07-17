// Arquivo script no modo player vs player
const flipSoundM = document.getElementById('flipSoundM');
var defeat = document.getElementById('defeatM');
var menuOpt =  document.getElementById("menuOptM");
var menuAtalho =  document.getElementById("menuAtalhoM");
var scrStart=  document.getElementById("scrStart");
var scrRankin = document.getElementById('_scrRanking');
var srcRulesM =  document.getElementById("scrRegrasM");
var scrGameM = document.getElementById('__containerM');
var quitM =  document.getElementById("quitM");
var buttonM1 = document.getElementById('buttonM1'),
    buttonM2 = document.getElementById('buttonM2'),
    buttonM3 = document.getElementById('buttonM3');
let num = 0;
var persNameM = document.getElementById('persNameM');  
var inforName = document.getElementById('infor-nameM'); 
var loadM = document.getElementById('loadM'); 
var inputM1 = document.getElementById('inserName1M');
var input2M = document.getElementById('inserName2M');
var playerT1M = document.getElementById('playerTurn1M');
var qtGameM =  document.getElementById("quitGameM");
var vitory = document.getElementById('victory');
var victory1 = false;
var nomeM = localStorage.getItem("mNome");         
var pnome2= document.getElementById('pnome2');
let vezjogador = 0;

//função de som de click
function flipGameSoundM() {

  flipSoundM.duration = 0.9
  flipSoundM.volume = 0.1
  flipSoundM.play()
}
////function do inputs para o multiplayer
multi.onclick = () => {

  flipGameSoundM();
  scrStart.style.display = 'none ';
  loadM.style.display = 'block ';
  setTimeout(() => {
    loadM.style.display = 'none ';
  }, 2800)
  setTimeout(() => {
      persNameM.style.display = 'block';
      inforName.innerHTML = "inform the names:";
      }, 2800) 
}
//function para verificar os nomes dos usuarios e se eles possuem git hub
nameTurnM.onclick = () => {
   flipGameSoundM();
   setTimeout(() => {   
     playerT1M.innerHTML = `Click on the chosen number one at <br> a time!`;  
   },4000)  
   axios.get(`https://api.github.com/users/${inputM1.value}`)
   .then(response => {
      document.querySelector('#inserName1M').innerHTML = `${response.data.login}`
      document.querySelector('#inserName2M').innerHTML = `${response.data.login}`
      if(response.data.login === null) {
        document.querySelector('#inserName1M').innerHTML = `GitHub player1 não cadastrado`            
      }
      else{
        if(input2M.value !== ""){
          document.querySelector('#inserName2M').innerHTML = ` ${response.data.login}`
          document.querySelector('#inserName1M').innerHTML = `${response.data.login}`        
          persNameM.style.display = 'none';
          srcRulesM.style.display = 'block';
          playerT1M.innerHTML = `Hello ${inputM1.value} and ${input2M.value}  !`;  
        } 
        else{
          alert(`GitHub do player 2 não encontrado `)  
        }
      } 
   })
   .catch(() => {
         alert(`GitHub não encontrado`)
   })         
}
//function para depois de clicar no botão de regras o jogo iniciar
gameM.onclick = () => {
  flipGameSoundM();
  srcRulesM.style.display = 'none'; 
  menuAtalho.style.display = 'block'; 
  scrGameM.style.display = 'block';  
}
//definindo valores inicias para os butões
buttonM1.value = 1;
buttonM2.value = 2;
buttonM3.value = 3;

function buttonM2click(model) {
  buttonM1.value = +model + 1;
  buttonM2.value = +model + 2;
  buttonM3.value = +model + 3;
}
//function de click do primeiro botão do multiplayer
buttonM1.onclick = () => {
   flipGameSoundM();
   playerturn()
   num = buttonM1.value;  
   if(buttonM1.value == num && num == 21){    

      vitory.style.display = 'block';
      scrGameM.style.display = 'none';
      setTimeout(() => {
               vitory.style.display = 'none';
               scrRankin.style.display = 'block';                    
      }, 2800) 
      nameM();
      pontuacaoV();
   }        
   if(buttonM1.value > 21 && num > 21){
      scrGameM.style.display = 'none';
      defeat.style.display = 'block'; 
   }
   buttonM2click(buttonM1.value);
}
//function de click do segundo botão do multiplayer
buttonM2.onclick = () => {
   flipGameSoundM();
   playerturn()
   num = buttonM2.value;
   if(buttonM2.value == num && num == 21){   
    vitory.style.display = 'block';
    scrGameM.style.display = 'none';
      setTimeout(() => {
         vitory.style.display = 'none';
         scrRankin.style.display = 'block';                               
      }, 2800)
      nameM();
      pontuacaoV();
   }
   if(buttonM2.value > 21 && num > 21){
       scrGameM.style.display = 'none';
       defeat.style.display = 'block';
   }
   buttonM2click(buttonM2.value);
}
//function de click do terceiro botão do multiplayer
buttonM3.onclick = () => {
   flipGameSoundM();
   playerturn()
   num = buttonM3.value;    
   if(buttonM3.value == num && num == 21){
      vitory.style.display = 'block';
      scrGameM.style.display = 'none';
      setTimeout(() => {
              vitory.style.display = 'none';
              scrRankin.style.display = 'block';          
      }, 2800) 
      nameM();
      pontuacaoV(); 
   }
   if(buttonM3.value > 21 && num > 21){
      scrGameM.style.display = 'none';
      defeat.style.display = 'block';
   }
   buttonM2click(buttonM3.value)
}
//function de click de triunfo do mplayer ou computer
function pontuacaoV(){
  let vict = 1;
  localStorage.setItem("pontVM", vict);
  var pontVM = localStorage.getItem("pontVM");         
  var scoreVM = document.getElementById('scoreVM');
  victory1 = true;
  if(victory1 == true){
    let i = 0;
    pontVM = parseInt(pontVM) + i;  
  }
  scoreVM.innerHTML = pontVM;  
} 
//function que leva o nome do jogador vencedor seja O computer ou player para o localStorage
function nameM(){
  localStorage.setItem("mNome", inputM1.value);
  pnome2.innerHTML = nomeM;
}
function playerturn(){ 

  vezjogador = buttonM1.value % 2;
  if(vezjogador == 0 ){  
    playerT1M.innerHTML = `Vez ${inputM1.value} !`;  
  }
  else{  
    playerT1M.innerHTML = `Vez ${input2M.value} !`;  
  }
}
//function do campo de atalho para o menu
menuAtalho.onclick = () => {
  flipGameSoundM();
  scrGameM.style.display = 'none';
  menuOpt.style.display = 'block'; 
  menuAtalho.style.display = 'none';
  defeat.style.display = 'none';
  scrRankin.style.display = 'none';  
  victory.style.display = 'none'; 
}
//function que abre o menu
openMenuM.onclick = () => {
  flipGameSoundM();
  scrGameM.style.display = 'none';
  menuOpt.style.display = 'block'; 
  menuAtalho.style.display = 'none';
  defeat.style.display = 'none';
  scrRankin.style.display = 'none';   
 }
//function que inicia novo jogo
newGameMenuM.onclick = () => {
  flipGameSound();
  scrGameM.style.display = 'block';
  menuOpt.style.display = 'none';  
  menuAtalho.style.display = 'block'; 
  scrRanking.style.display = 'none';  
  buttonM1.value = 1;
  buttonM2.value = 2;
  buttonM3.value = 3; 
}
//function que mostra as regras do menu
rulesMenuM.onclick = () => {
  flipGameSoundM();
  menuOpt.style.display = 'none';
  srcRulesM.style.display = 'block';     
}
//function para retornar ao menu start com os modos de jogo
returStartM.onclick= () => {
  menuAtalho.style.display = 'none';
  menuOpt.style.display = 'none';
  scrStart.style.display = 'block'; 
  scrStart.style.display = 'flex'; 
}
//function para sair do jogo multiplayer 
quitM.onclick = () => {
  flipGameSoundM();
  menuAtalho.style.display = 'none';
  menuOpt.style.display = 'none';  
  qtGameM.style.display = 'block';
  qtGameM.innerHTML = "bye see you next time!";
  qtGameM.style.fontSize = "50px";
}