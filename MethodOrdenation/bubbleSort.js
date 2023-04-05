/**O método funciona examinando cada conjunto de elementos adjacentes na string,
 *  da esquerda para a direita, 
 * trocando suas posições se estiverem fora de ordem. 
 * O algoritmo então repete esse processo até que possa 
 * percorrer toda a string e não encontrar 
 * dois elementos que precisem ser trocados. */

const array = [6, 5, 3, 1, 8, 7, 78, 4, 15, 0, 21, 9, 32, 99, 29, 20, 2, 1]

const BubbleSort = arrayInput => {
    const sizeArray = arrayInput.length


    for (let i = 0; i < sizeArray; i++) {

        let isSwapped = false
        for (let j = 0; j < sizeArray - 1; j++) {
            let aux
            if (arrayInput[j + 1] < arrayInput[j]) {
                aux = arrayInput[j]
                arrayInput[j] = arrayInput[j + 1]
                arrayInput[j + 1] = aux
                isSwapped = true
            }
            
            
        }
        
        if (!isSwapped) {
            
            break;
        }
    }

    console.log(arrayInput)
}

BubbleSort(array)