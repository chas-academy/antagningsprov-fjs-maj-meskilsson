

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    const names = ["Mattias", "Johan", "Eskil", "Susanne", "Olivia"];

    //loop som går igenom antal element i names variabeln

    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
 
}

module.exports = { uppg6 };