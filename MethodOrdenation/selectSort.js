/**O algoritmo Select Sort é um algoritmo de ordenação simples que funciona selecionando o 
 * menor elemento do array e movendo-o para a primeira posição, em seguida, 
 * seleciona o segundo menor elemento e o move para a segunda posição, 
 * e assim por diante, 
 * até que todo o array esteja ordenado. 
 * Aqui está uma implementação em JavaScript: */
const array = [6, 5, 3, 1, 8, 7, 2, 4]
const sizeArray = array.length

const SelectSort = arrayInput => {
    let minIndex

    for (let i = 0; i <= sizeArray - 1; i++) {
        minIndex = i

        for (let j = i + 1; j <= sizeArray; j++) {

            if (arrayInput[j] < arrayInput[minIndex]) {
                minIndex = j
            }

        }

        if (minIndex !== i) {
            let temp = arrayInput[i];
            arrayInput[i] = arrayInput[minIndex];
            arrayInput[minIndex] = temp;
        }
    }
    console.log(arrayInput)
}

SelectSort(array)