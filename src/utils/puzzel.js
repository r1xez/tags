export const createSolved = (n) => {
    const total = n * n
    return Array.from({ length: total }, (_, i) => (i + 1) % total)
};

export const inversion = (arr) => {
    const flat = arr.filter(x => x !== 0)
    let inv = 0
    for (let i = 0; i < flat.length; i++) {
        for (let j = i + 1; j < flat.length; j++) {
            if (flat[i] > flat[j]) {
                inv++
            }
        }
    }
    return inv;
}

export const blankRowFromBottom = (arr, n) => {
    const index = arr.indexOf(0)
    const rowFromTop = Math.floor(index / n) + 1
    return n - rowFromTop + 1;
}

export const isSolvable = (arr, n) => {
    const inv = inversion(arr)
    if (n % 2 === 1) {
        return inv % 2 === 0
    }
    const b = blankRowFromBottom(arr, n)
    return (inv + b) % 2 === 1;
};

export const isSolved = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] !== i + 1) return false


    }
    return arr[arr.length - 1] === 0;

}

export const shuffleSolvable = (solved, n) => {
    let arr = solved.slice();
    do {
        for(let i = arr.length - 1;i > 0;i--){ 
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    } while (!isSolvable(arr, n) || isSolved(arr));
    return arr; // ← додай це
};

export const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

export const canMove = (index, zeroIndex, n) => {
    const row = Math.floor(index / n), c1 = index % n;
    const row2 = Math.floor(zeroIndex / n), c2 = zeroIndex % n;
    return Math.abs(row - row2) + Math.abs(c1 - c2) === 1;
}