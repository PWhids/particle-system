
function iterate(func, n) {
    for (let i=0; i<n; i++) {
        func();
    }
}

module.exports = {
    iterate
};