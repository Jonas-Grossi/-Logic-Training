/**Um número primo é um número natural maior que 1 que só é divisível por 1 e por ele mesmo. 
 * 2, 3, 5, 7, 11, 13 etc são números primos. 4, por exemplo, não é um número primo, 
 * pois 4 é divisível por 2. 4 / 2 = 2. Pontos de bônus para uma abordagem mais funcional em seu código.
 *  Por exemplo,tente usar funções de array como mapear, filtrar ou reduzir. */



 let notPrimeNumbers =  [];
 let primeNumbers =  []

const  checkPrime = (array) => {
    array.forEach(number => {
       
        notPrime(number)



    })

       function notPrime  (number) {
        
       
         
         if(number < 2 || number == 2){
            primeNumbers.push(number)
           
         }
        for (let i = 2; i < number; i++) {
            
            if(number % i === 0){
              
                
                notPrimeNumbers.push(number)
             
               break
                
            }else{
                primeNumbers.push(number)
                break
            }

        }

   
    }
    console.log("Lista de numeros primos ",primeNumbers)
    console.log("Lista de numeros que não são primos ",notPrimeNumbers)
  
}

const arrayInput=[1,5,6,2,4,3,7,5,11,12,20]
checkPrime(arrayInput)