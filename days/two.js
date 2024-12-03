export function day2one(input) {
    let answer = 0;
    let lines = input.split("\n");
    for (let line of lines) {
        let reportsList = line.split(" ");
        let up = Number(reportsList[0]) < Number(reportsList[1]);
        let doesMatch = true;
        for (let i = 0; i < reportsList.length - 1; i++) {
            let dif = Number(reportsList[i]) - Number(reportsList[i + 1]);
            if ((up && dif > 0) || (!up && dif < 0) || Math.abs(dif) > 3 || Math.abs(dif) === 0) {
                doesMatch = false;
            }
        }
        if (doesMatch) answer++
    }
    return answer;
}
export function day2two(input) {
    let answer = 0;
    let lines = input.split("\n");
    for (let line of lines) {
        let reportsList = line.split(" ");
        let add = false
        for (let i = 0; i < reportsList.length; i++) {
            let safeList = reportsList.filter((report,index) => index !== i)
            if (day2one(safeList.join(" "))) {
                add = true;
            }
        }
        if (add) answer++;
    }
    return answer;
}