module.exports = function reverse (n) {
    let arr = String(n).split('');
    let res = [];
    for(let i = arr.length - 1; i >=0; i--) {
        if(arr[i] === '-') continue;
        res.push(arr[i])
    }
    return +res.join('');
}
