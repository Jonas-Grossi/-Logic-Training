let arrayInput = [5, 3, 8, 4,15,19,17,11,13];

const quickSort = array => {
   
    if(array <= 1){

        return array
    }
    let pivot = array[array.length - 1]
    
    return shrink(array, pivot)

}

const shrink = (array, pivot) => {  
    let subMax = []
    let subMin = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > pivot) {
            subMax.push(array[i])
            
        }else{
            subMin.push(array[i])
        }
        
        
    }
    return[...quickSort(subMin),pivot,...quickSort(subMax)]

}

console.log(quickSort(arrayInput))