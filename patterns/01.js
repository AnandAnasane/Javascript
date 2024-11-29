// 100. Placeholder Pattern 100
function pattern100(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}
pattern100(5);