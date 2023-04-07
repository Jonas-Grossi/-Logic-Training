/**O algoritmo Merge Sort é um método de classificação eficiente que divide a matriz a ser 
 * classificada em duas metades, classifica cada metade recursivamente e, em seguida, mescla as 
 * duas metades classificadas para produzir uma matriz classificada completa. O processo é repetido 
 * até que a matriz inteira esteja classificada.

Aqui está um exemplo do funcionamento do Merge Sort:

Divisão: A matriz a ser classificada é dividida em duas metades iguais.

Classificação: Cada metade é classificada separadamente, usando o mesmo algoritmo de Merge Sort,
 aplicado recursivamente até que cada submatriz tenha apenas um elemento ou esteja vazia.

Mesclagem: As duas metades classificadas são mescladas para criar uma matriz classificada completa. 
A mesclagem é feita comparando o primeiro elemento de cada submatriz e colocando o menor elemento 
primeiro na nova matriz. Esse processo é repetido até que todos os elementos das duas submatrizes 
sejam colocados na nova matriz.

Repetição: Os passos de divisão, classificação e mesclagem são repetidos recursivamente para cada 
metade da matriz, até que a matriz inteira esteja classificada. */


let mergeSort = array => {
    if (array.length <= 1) {
        //console.log(array)
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
    //let array = [5, 3, 8, 4];
}

let merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


//let array = [5, 3, 8, 4];
let array = [5, 3, 8, 4, 2, 10, 9, 7, 11, 22, 15, 35, 99, 70, 50];
console.log(mergeSort(array)); 