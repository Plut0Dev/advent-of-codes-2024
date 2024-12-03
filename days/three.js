export function day3one(input) {
    let answer = 0;
    for (let i = 0; i < input.length - 8; i++) {
        for (let y = 5; y <= 12; y++) {
            let substring = input.slice(i, i + y);
            if (substring.startsWith("mul(")) {
                if (substring.endsWith(")")) {
                    let substringArray = substring.slice(4, substring.length - 1).split("");
                    if (substringArray.filter((value) => value !== "," && isNaN(value)).length === 0) {
                        let numbers = substringArray.filter((value) => value === "," || !isNaN(value)).join("").split(",")
                        answer += Number(numbers[0]) * Number(numbers[1]);
                    }
                }
            }
        }
    }
    return answer;
}

export function day3two(input) {
    let answer2 = 0;
    let active = true;
    for (let i = 0; i < input.length - 8; i++) {
        for (let y = 5; y <= 12; y++) {
            let substring = input.slice(i, i + y);
            if (substring.includes("don't()")) {
                active = false;
            } else if (substring.includes("do()")) {
                active = true;
            }
            if (active) {
                if (substring.startsWith("mul(") && substring.endsWith(")")) {
                    let substringArray = substring.slice(4, substring.length - 1).split("");
                    if (substringArray.filter((value) => value !== "," && isNaN(value)).length === 0) {
                        let numbers = substringArray.filter((value) => value === "," || !isNaN(value)).join("").split(",")
                        answer2 += Number(numbers[0]) * Number(numbers[1]);
                    }
                }
            }
        }
    }
    return answer2;
}


