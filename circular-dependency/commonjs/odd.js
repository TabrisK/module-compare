const even = require('./even');

module.exports = function odd(n) {
    return n != 0 && even(n - 1);
}