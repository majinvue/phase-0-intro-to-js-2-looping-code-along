// Code your solutions in this file

function writeCards(names, event){
    const myName = []
    for(let i = 0; i < names.length; i++){
        myName.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return myName
}

function countDown(i){
    while(i >= 0){
        console.log(i--)
    }
}