/**Insertion Sort ou ordenação por inserção é o método que percorre 
 * um vetor de elementos da esquerda para a 
 * direita e à medida que avança vai ordenando os 
 * elementos à esquerda. Possui complexidade 
 * C(n) = O(n) no melhor caso e 
 * C(n) = O(n²) no caso médio e pior caso. 
 * É considerado um método de ordenação estável. */

const array = [6, 5, 3, 1, 8, 7, 2, 4]

const insertSort = arrayInput => {

    for (let i = 1; i < arrayInput.length; i++) {
        let current = arrayInput[i]
        let j = i - 1
       
        while (j >= 0 && current < arrayInput[j]) {
            arrayInput[j + 1] = arrayInput[j]

            j--

        }
        arrayInput[j + 1] = current


    }

console.log(arrayInput) 
}

insertSort(array)