
function SumDivisible(numbers){
    let cont = 0;

    for(let i = 0; i < numbers; i++){
        let array = JSON.stringify(i).split('');
        let lastNumber = JSON.parse(array[array.length - 1]);

        if(lastNumber === 0 || lastNumber === 5){
            cont += i;
        }
    }

    for(let i = 0; i < numbers; i++){
        //verificar se e divisivel por 3
        const result = (parseInt(i/3)*3) - i;

        if(result === 0){
            cont += i;
        }
    }
    console.log(`Soma dos divisiveis por 3 e 5 do numero ${numbers} = ${cont}`);
    
}


SumDivisible(10);