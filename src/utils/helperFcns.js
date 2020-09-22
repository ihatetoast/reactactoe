
// iterate over array. array destr in each iteration. check for the el at all three indices are the same
export function checkWinner(arr){
    // arr of arrs that are horiz, vert, diagonal winning combos, argh
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < winCombos.length; i++){
        const[a, b, c] = winCombos[i]
        if(arr[a] && arr[a]===arr[b] && arr[a]===arr[c]){
            //return if the winner is X or O (the one in a)
            return arr[a];
            console.log(`The winner is ${arr[a]}`);
        }
    }
    return null;
}
