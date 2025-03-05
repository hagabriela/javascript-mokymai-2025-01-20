let uzsakymoBusena = 'atšauktas' // naujas, išsiųstas, baigtas, atšauktas

switch (uzsakymoBusena) {
    case 'naujas':
        console.log(`<p class = "busena naujas">Naujas</p>`);
        break;
    case 'išsiųstas':
        console.log(`<p class = "busena issiustas">Išsiųstas</p>`);
        break;
    case 'baigtas':
        console.log(`<p class = "busena baigtas">Baigtas</p>`);
        break;
    case 'atšauktas':
        console.log(`<p class = "busena atsauktas">Atšauktas</p>`);
        break;
    default:
        console.log('Įvyko klaida');
        break;
}