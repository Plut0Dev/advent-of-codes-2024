export function input1 (input){
    let listLeft = []
    let listRight = []
    let lines = input.split('\n');
    for (let line of lines) {
        let splitLines = line.split("   ");
        listLeft.push(splitLines[0]);
        listRight.push(splitLines[1]);
    }
    return {listLeft,listRight};
}
export function day1one(input) {
    let lists = input1(input);
    let list1 = lists.listLeft.sort((a, b) => a - b);
    let list2= lists.listRight.sort((a, b) => a - b);
    let answer = 0
    for (let i = 0; i < list1.length; i++) {
        answer = answer + Math.abs(Number(list1[i]) - Number(list2[i]));
    }
    return answer;
}
export function day1two(input) {
    let inputTreated = input1(input);
    let list1 = inputTreated.listLeft;
    let list2 = inputTreated.listRight;
    let answer = 0;
    for (let numberA of list1) {
        for (let numberB of list2) {
            if (Number(numberA) === Number(numberB)) {
                answer += Number(numberA)

            }
        }
    }
    return answer;
}