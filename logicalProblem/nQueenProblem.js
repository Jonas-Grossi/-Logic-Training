/**O problema das N-rainhas consiste em encontrar todas as combinações possíveis de N rainhas 
 * num tabuleiro de dimensão N por N tal que nenhuma das rainhas ataque qualquer outra. 
 * Duas rainhas atacam-se uma à outra quando estão na mesma linha, 
 * na mesma coluna ou na mesma diagonal do tabuleiro. */


function solveNQueens(n) {
    let sol = 0
    const board = Array(n).fill().map(() => Array(n).fill(' \ - '));
    // console.log(board)
    const result = [];

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
           // console.log(result)
            sol++
            //    console.log(result)
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = ' - ';
            }
        }
    }

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
            //verifica 
            const leftDiagonal = col - (row - i);
            if (leftDiagonal >= 0 && board[i][leftDiagonal] === 'Q') {
                return false;
            }
            //verifica as diagonais a direita
            const rightDiagonal = col + (row - i);
            if (rightDiagonal < n && board[i][rightDiagonal] === 'Q') {
                return false;
            }
        }
        return true;
    }

    backtrack(0);
    console.log(result)
    
    console.log(`Existem ${sol} soluções para esse problema`)
}

solveNQueens(4)