export function day5one(input) {
    let answer = 0;
    const blocks = input.split('\n\n');
    const rulesMap = new Map;
    const ruleBlockArr = blocks[0].split("\n")
    const numbersLines = blocks[1].split("\n")
    ruleBlockArr.forEach(rule => {
        const [x, y] = rule.split("|")
        const current = rulesMap.get(x) || []
        current.push(y)
        rulesMap.set(x, (current))
    })
    numbersLines.forEach(numberLine => {
        const line = numberLine.split(",")
        const middle = line[Math.floor(line.length * 0.5)]
        let validUpdate = true;
        const checkHistory = [];
        for (let i = 0; i < line.length - 1; i++) {
            checkHistory.push(line[i]);
            let checkList = rulesMap.get(line[i + 1]);
            if (checkList) {
                checkHistory.forEach(check => {
                    if (checkList.includes(check)) {
                        validUpdate = false;
                    }
                })
            }
        }
        if (validUpdate) {
            answer += Number(middle)
        }
    })
    return answer
}

export function day5two(input) {
    let answer = 0;
    const blocks = input.split('\n\n');
    const rulesMap = new Map;
    const ruleBlockArr = blocks[0].split("\n")
    const numbersLines = blocks[1].split("\n")
    ruleBlockArr.forEach(rule => {
        const [x, y] = rule.split("|")
        const current = rulesMap.get(x) || []
        current.push(y)
        rulesMap.set(x, (current))
    })
    numbersLines.forEach(numberLine => {
        let validUpdate = true
        const line = numberLine.split(",")
        function sort() {
            for (let i = 0; i < line.length - 1; i++) {
                let checkList = rulesMap.get(line[i + 1]);
                if (checkList) {
                    if (checkList.includes(line[i])) {
                        console.log(line);
                        [line[i], line[i + 1]] = [line[i + 1], line[i]];
                        console.log(line);
                        validUpdate = false;
                        sort();
                    }

                }
            }
        }
        sort()
        if (!validUpdate) {
        const middle = line[Math.floor(line.length * 0.5)]
        console.log(middle);
        answer += Number(middle)
        }
    })
    return answer
}