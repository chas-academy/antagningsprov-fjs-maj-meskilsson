

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    const array = [1, 2, 3, 4, 5];
    sort(array);
}

// funktion som sorterar en array av nummer
// for loop som går igenom alla element i arrayen
// och sedan kollar om talet på plats i är delbart med 2

function sort(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log(array[i] + "jämt");
        } else {
            console.log(array[i] + "udda");
        }
    }
}

module.exports = { uppg9 };