const findMedianSortedArrays = (a: number[], b: number[]): number => {
    const m = a.length;
    const n = b.length;
    const mid = Math.floor((m + n) / 2);

    let i: number = 0;
    let j: number = 0;
    let k: number = 0;
    let prev: number = 0;
    let curr: number = 0;

    while (k <= mid) {
        prev = curr;

        if (i < m && (j >= n || a[i] < b[j])) {
            curr = a[i];
            i++;
        } else {
            curr = b[j];
            j++;
        }

        k++;
    }

    return (m + n) % 2 === 0 ? (prev + curr) / 2 : curr;
};