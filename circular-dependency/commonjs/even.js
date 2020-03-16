const odd = require('./odd');

module.exports = function even(n) {
    return n == 0 || odd(n - 1);
}