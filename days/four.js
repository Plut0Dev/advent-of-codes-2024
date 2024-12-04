const dirPlus = [1,2,3]
const dirMinus = [-1,-2,-3]
export function day4one(input) {
    let answer = 0;
    //forwards/backwards
    answer += input.match(/XMAS/g).length + input.match(/SAMX/g).length
    input.split("\n").map((line, lineIndex, lineArr) => {
        line.split("").map((letter, letterIndex, letterArr) => {
            if (letter === "X") {
                const vertSearch = (dir) => {
                    let directions;
                    switch (dir) {
                        case "up":
                            directions = dirMinus;
                            break
                        case "down":
                            directions = dirPlus;
                            break;
                        default:
                            break
                    }
                    return (directions && lineArr[lineIndex + directions[0]].split("")[letterIndex] === "M" &&
                        lineArr[lineIndex + directions[1]].split("")[letterIndex] === "A" &&
                        lineArr[lineIndex + directions[2]].split("")[letterIndex] === "S")

                }
                const diaSearch = (dirX, dirY) => {
                    let directionsX;
                    let directionsY;
                    switch (dirX) {
                        case "left":
                            directionsX = dirMinus;
                            if (dirY === "up") directionsY = dirMinus;
                            else if (dirY === "down") directionsY = dirPlus;
                            break
                        case "right":
                            directionsX = dirPlus;
                            if (dirY === "up") directionsY = dirMinus;
                            else if (dirY === "down") directionsY = dirPlus;
                            break
                        default:
                            break
                    }
                    return (directionsX && directionsY && lineArr[lineIndex + directionsY[0]].split("")[letterIndex + directionsX[0]] === "M" &&
                        lineArr[lineIndex + directionsY[1]].split("")[letterIndex + directionsX[1]] === "A" &&
                        lineArr[lineIndex + directionsY[2]].split("")[letterIndex + directionsX[2]] === "S")


                }
                const condition = (innerCond, dirX, dirY) => {
                    if (!dirY){
                        return innerCond && vertSearch(dirX);
                    }
                    return innerCond && diaSearch(dirX,dirY);
                }
                const maxHeight = lineArr.length-4;
                const maxWidth = letterArr.length-4;
                //vertical
                if (condition(lineIndex <= maxHeight,"down")) {
                    answer++
                }
                if (condition(lineIndex >= 3,"up")) {
                    answer++;
                }
                //diagonal
                if (lineIndex <= maxHeight) {
                    if (condition(letterIndex <= maxWidth,"left", "up")) {
                        answer++;
                    }
                    if (condition(letterIndex >= 3,"right", "up")) {
                        answer++;
                    }
                }
                if (lineIndex >= 3) {
                    if (condition(letterIndex <= maxWidth,"left", "down")) {
                        answer++;
                    }
                    if (condition(letterIndex >= 3 ,"right", "down")) {
                        answer++;
                    }
                }
            }
        })
    });
    return answer
}
export function day4two(input) {
    let answer = 0;
    input.split("\n").map((line, lineIndex, lineArr) => {
        line.split("").map((letter, letterIndex, letterArr) => {
            if (letter === "A" && lineIndex >= 1 && lineIndex < lineArr.length -1
                && letterIndex >=1 && letterIndex < letterArr.length -1 ) {
                let upperLeft = lineArr[lineIndex-1].split("")[letterIndex -1];
                let downLeft = lineArr[lineIndex+1].split("")[letterIndex -1];
                let upperRight = lineArr[lineIndex-1].split("")[letterIndex +1];
                let downRight = lineArr[lineIndex+1].split("")[letterIndex +1];
                //u=upper l=left = d=down r=right
                let uldrMAS = ( upperLeft === "M" && downRight === "S" || upperLeft === "S" && downRight === "M" )
                let urdlMAS = (upperRight === "M" && downLeft === "S" || upperRight === "S" && downLeft === "M" )
                if ( uldrMAS && urdlMAS ) {
                    answer++
                }
            }
        })
    });
    return answer
}