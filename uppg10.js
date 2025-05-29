function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

  
    // arrays
    const bigEven = [];
    const smallOdd = [];
    const other = [];

    // for loop som går igenom varje element i array numbers
    // kollar om talen är jämna alltså delbara med 2
    // lägger dessa elementen med .push i respektive array

    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 10 && numbers[i] % 2 === 0){
        bigEven.push(numbers[i]);
      } else if(numbers < 10 && numbers[i] % 2 !== 0){
        smallOdd.push(numbers[i]);
      } else{
        other.push(numbers[i]);
      }
    }

    
    return {BigEven: bigEven, smallOdd : smallOdd, other: other};
  }
  
  module.exports = { uppg10 };
  