
export function day3one(input) {
    //after I learned about RegEx
    let answer = 0;
    let calculations = input.match(/mul\(\d{1,3},\d{1,3}\)/g);
    for (let calculation of calculations) {
        let multiplicators = calculation.match(/\d+/g);
        answer += multiplicators[0] * multiplicators[1]
    }
    //My first approach to the problem
    // for (let i = 0; i < input.length - 8; i++) {
    //     for (let y = 5; y <= 12; y++) {
    //         let substring = input.slice(i, i + y);
    //         if (substring.startsWith("mul(")) {
    //             if (substring.endsWith(")")) {
    //                 let substringArray = substring.slice(4, substring.length - 1).split("");
    //                 if (substringArray.filter((value) => value !== "," && isNaN(value)).length === 0) {
    //                     let numbers = substringArray.filter((value) => value === "," || !isNaN(value)).join("").split(",")
    //                     answer += Number(numbers[0]) * Number(numbers[1]);
    //                 }
    //             }
    //         }
    //     }
    // }
    return answer;
}

export function day3two(input) {
    //same here
    let answer = 0;
    let enabled = true;
    let functions = input.match(/(mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\))/g)
    for (let func of functions) {
        switch (func) {
            case "don't()":
                enabled = false;
                console.log("dont")
                break;
            case "do()":
                console.log("do")
                enabled = true;
                break;
            default:
                let multiplicators = func.match(/\d+/g);
                answer += multiplicators[0] * multiplicators[1]
        }
    }
    // let answer2 = 0;
    // let active = true;
    // for (let i = 0; i < input.length - 8; i++) {
    //     for (let y = 5; y <= 12; y++) {
    //         let substring = input.slice(i, i + y);
    //         if (substring.includes("don't()")) {
    //             active = false;
    //         } else if (substring.includes("do()")) {
    //             active = true;
    //         }
    //         if (active) {
    //             if (substring.startsWith("mul(") && substring.endsWith(")")) {
    //                 let substringArray = substring.slice(4, substring.length - 1).split("");
    //                 if (substringArray.filter((value) => value !== "," && isNaN(value)).length === 0) {
    //                     let numbers = substringArray.filter((value) => value === "," || !isNaN(value)).join("").split(",")
    //                     answer2 += Number(numbers[0]) * Number(numbers[1]);
    //                 }
    //             }
    //         }
    //     }
    // }
    return answer;
}


