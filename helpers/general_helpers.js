// stringHelpers.js

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
function ucwords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param {int} num - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
function formatCurrency(num) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(num);
}

module.exports = {
    ucwords,
    formatCurrency
};