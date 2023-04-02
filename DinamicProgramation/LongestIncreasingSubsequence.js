
const LongestIncreasingSubsequence = (array) => {
    const lengthArray = array.length

    let subsequence = new Array(lengthArray).fill(1)

    for (let i = 1; i < lengthArray; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i] && subsequence[i] < subsequence[j] + 1) {
                subsequence[i] = subsequence[j] + 1
            }
        }


    }

    const maxLength = Math.max(...subsequence)

    console.log(maxLength);
}
const arrayInput = [10, 22, 9, 33, 21, 50, 41, 60]
LongestIncreasingSubsequence(arrayInput)