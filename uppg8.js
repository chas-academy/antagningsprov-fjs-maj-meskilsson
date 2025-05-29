

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    const person = [
        {name: "Mattias", age: 31},
        {name: "Johan", age: 25},
        {name: "Eskil", age: 22},
        {name: "Susanne", age: 55},
        {name: "Olivia", age: 28}
    ];

    overThirty(person);

}

// funktion som går igenom antal element i en array
// om detta element med dotnotation .age har åldern över 30
// så printar vi ut tillhörande namn.

function overThirty(array){
    for (let i = 0; i < array.length; i++){
        if(array[i].age > 30){
            console.log(array[i].name);
        }
    }
}

module.exports = { uppg8 };