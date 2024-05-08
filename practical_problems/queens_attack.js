/*

Queens That Can Attack
On a 0-indexed 8 x 8 chessboard, there can be multiple black queens and one white king.
You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.
Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.
Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]		Output: [[0,1],[1,0],[3,3]]
Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).

*/
var queensAttacktheKing = function(queens, king) {
    let [xKing, yKing] = king;
    let queenSet = new Set();
    let result = [];
    
	// add all queen coordinates to a set for fast lookup
    for (let [x, y] of queens) queenSet.add(x + "," + y);
    
	// traverse() returns the first (if any) queen on the path starting at x, y and 
	// heading in the dx, dy direction (e.g. north-east is dx = 1, dy = -1)
    const traverse = (x, y, dx, dy) => {
        if (x < 0 || y < 0 || x > 7 || y > 7) return;
        if (queenSet.has(x + "," + y)) {
            result.push([x, y]);
            return;
        }
        traverse(x + dx, y + dy, dx, dy);
    }
    
	// starting from the king's coordinates, search in all directions 
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
			// skip the case when dx and dy equal 0 since traverse() will not move
            if (i === 0 && j === 0) continue;
            traverse(xKing, yKing, i, j);
        }
    }

    return result;
};
var queensAttacktheKing = function(queens, king) {
    const [a,b] = king
    const mapped = queens.reduce((init,[x,y]) => {
        init.set(`${x}:${y}`)
        return init
    }, new Map())

     const dfs = (x,y, difX = 0, difY = 0) => {
        while(!(x === a && y === b)){
            x += difX
            y += difY
            if(mapped.has(`${x}:${y}`)){
                return false
            }
        }
        return true
    }

    const result = []
    
    for(let i = 0; i < queens.length; i++){
        const [x,y] = queens[i]
        const difX = x > a ? -1: 1
        const difY = y > b ? -1: 1
        const rowMatches = x === a && dfs(x, y, 0, difY)
        const columnMatches = !rowMatches && y === b && dfs(x, y, difX, 0)
        const dioganalMatches =!columnMatches && (Math.abs(x-a) - Math.abs(y-b)) === 0 && dfs(x, y, difX, difY)
        if(rowMatches || columnMatches || dioganalMatches){
            result.push(queens[i])
        }
    }

    return result
};


var queensAttacktheKing = function(queens, king) {
    const result = [];

    const directions = [
       [-1,0],[1,0], // Up and Down
        [0,-1],[0,1],// Left And Right 
        [1,1],[-1,-1], [1,-1],[-1,1], // Diaganals
    ];

    const queensSet = new Set(queens.map(([x,y])=> (10* x + y)));

    for (const [xDir, yDir] of directions) {
        moveDirection(xDir, yDir)
    }

    function moveDirection(x, y){
        let xKing = king[0];
        let yKing = king[1];

        while(true){
            xKing += x;
            yKing += y;

            if(xKing < 0 || xKing >= 8  || yKing < 0  || yKing >= 8){
                break;
            }

            if(queensSet.has(10 * xKing + yKing)){
                result.push([xKing, yKing]);
                break;
            }
        }

    }
    
    return result;
    
};
