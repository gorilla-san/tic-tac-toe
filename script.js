var playerXturn = '1';
var playerOturn = '0';
var player1name = '';
var player2name = '';

const playerCreationForm = document.getElementById('playerCreation');
const mainWindow = document.querySelector('main');
const formButton = document.getElementById('startgame');

const Player = (name, weapon,  turn) =>  {
        name;
        weapon;
        turn;
        return {name, weapon, turn}
    }

const player1 = Player(player1name, 'X', playerXturn);
const player2 = Player(player2name, 'O', playerOturn);


window.addEventListener('click', (e) =>{
    if(mainWindow.classList.contains('mainInvis')) {
        return;
    }
    console.log(playerXturn);
    console.log(playerOturn);
    selectedField = e.target.id
    const field = document.getElementById(selectedField);
    console.log(e.target.id)
    if (field.innerHTML === "" && playerXturn === '1'){
        field.innerHTML = `<p>${player1.weapon}</p>`;
        playerXturn = '0';
        playerOturn = '1';
        return (playerXturn, playerOturn)
    }
    else if (field.innerHTML === "" && playerOturn === '1')
        field.innerHTML = `<p>${player2.weapon}</p>`;
        playerOturn = '0';
        playerXturn = '1';
        return (playerXturn, playerOturn)
})


playerCreationForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    player1name = document.getElementById('player1name').value;
    player2name = document.getElementById('player2name').value;
    playerCreationForm.classList.add('formInvis');
    mainWindow.classList.remove('mainInvis');
    player1.name = player1name;
    player2.name = player2name;
})
