const convert = (s: string, numRows: number): string => {
    if (numRows === 1) return s;

    let row = 0;
    let goingDown = false;
    const result = new Array(numRows).fill('');

    for (let i = 0; i < s.length; i++) {
        result[row] += s[i];
        if (row === 0 || row === numRows - 1) goingDown = !goingDown;
        row += goingDown ? 1 : -1;
    }

    return result.join('');
};