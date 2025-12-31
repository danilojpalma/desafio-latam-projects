let pScore = 0;
let pcScore = 0;
let ronda = 0;
let contador = 0;


//Funcion principal del juego
const game = () => {

//Iniciamos el juego en la pantalla de inicio
const startGame = () => {
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".partida");
  

  playBtn.addEventListener("click", () => {
  introScreen.classList.add("fadeOut");
  match.classList.add("fadeIn");

    //Obtenemos el valor de la ronda
  ronda = parseInt(document.getElementById("ronda").value);

});
};




//Jugando el juego
const jugarPartida = () => {
    const opciones = document.querySelectorAll(".btn-opciones button");
    const playerHand = document.querySelector(".player-hand");
    const pcHand = document.querySelector(".pc-hand");
    
    //Opciones del pc
    const pcOptions = ["Piedra", "Papel", "Tijeras"];

    opciones.forEach(option => {
        option.addEventListener("click", function() {


            // al hacer click en un btn se genera un numero aleatorio
            const pcNumber = Math.floor(Math.random() * 3);

            //Obtenemos la opcion del pc
            const pcChoice = pcOptions[pcNumber];

            // aqui llamamos la funcion compararManos
            compararManos(this.textContent.toLowerCase(), pcChoice.toLowerCase());

            //Actualizamos el texto
            actualizarRondas();

            //Actualizamos las imagenes
            playerHand.src = `./assets/img/${this.textContent}.png`;
            pcHand.src = `./assets/img/${pcChoice}.png`;
        });
     
    });

};


//Comparar las manos
const compararManos = (playerChoice, pcChoice) => {
    //Actualizamos el texto
    const ganador = document.querySelector(".ganador");
   
    //comparamos por un empate
    if(playerChoice === pcChoice){
        ganador.textContent = "Es un empate";
        return;
    }

    //comparamos por piedra
    if(playerChoice === "piedra"){
        if(pcChoice === "tijeras"){
            ganador.textContent = "El jugador gana";
            pScore++;
            contador++;
            actualizarMarcador();
            
            return;
        } else {
            ganador.textContent = "El pc gana";
            pcScore++;
            actualizarMarcador();
            
            return;
        }
    }

     //comparamos por papel
        if(playerChoice === "papel"){
            if(pcChoice === "piedra"){
                ganador.textContent = "El jugador gana";
                pScore++;
                contador++;
                actualizarMarcador();
                ;
                return;
            } else {
                ganador.textContent = "El pc gana";
                pcScore++;
                actualizarMarcador();
                
                return;
            }

};

    //comparamos por tijeras
        if(playerChoice === "tijeras"){
            if(pcChoice === "papel"){
                ganador.textContent = "El jugador gana";
                pScore++;
                contador++;
                actualizarMarcador();
                
                return;
            } else {
                ganador.textContent = "El pc gana";
                pcScore++;
                actualizarMarcador();
                
                return;
            }
        }

    }

//Actualizamos el texto de las rondas
const actualizarRondas = () => {
    const titulo = document.querySelector(".titulo-rondas");
    

    if(contador < ronda){
        
        titulo.textContent = `Logra ${ronda} victorias para ganar la partida`;
    }
    else if(contador == ronda){
        titulo.textContent = `La partida ha terminado`;

    
    }

    
}


//Actualizamos el marcador
const actualizarMarcador = () => {
    const puntajeJugador = document.querySelector(".puntaje-jugador p");
    const puntajePc = document.querySelector(".puntaje-pc p");
    const ganador = document.querySelector(".ganador");
    const btnDisplay = document.querySelector(".btn-opciones");
    const btnReset = document.querySelector(".reset");
    

    puntajeJugador.textContent = pScore;
    puntajePc.textContent = pcScore;
    
    if(pScore === ronda){
        ganador.textContent = "Felicidades has ganado la partida! 🥳";
        btnDisplay.style.display = "none";
        btnReset.style.display = "flex";

       
    } else if(pcScore === ronda){
        ganador.textContent = "Lo siento has perdido la partida 😭 ";
        btnDisplay.style.display = "none";
        btnReset.style.display = "flex";

      
    }


}


//Aca llamamos todas las funciones internas
startGame();
jugarPartida();

};

//inciciamos el juego
game();
