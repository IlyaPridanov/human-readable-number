module.exports = function toReadable (number) {
    let result = '';
    const digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ten = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    const str = number.toString();
    result = str.split('').map((el, i) => {
        let newEl = '';
        if (str.length === 1 && str[0] === '0') {
            newEl = 'zero';
        } else if (str.length === 3 && i === 0) {
            newEl = `${digit[el]} hundred `;
        } else if (str.length > 1 && str[str.length - 2] !== '1' && i === str.length - 2) {
            newEl = ten[el - 2];
        } else if (str.length > 1 && str[str.length - 2] === '1' && i === str.length - 1) {
            newEl = teen[el] || '';
        } else if (str[str.length - 2] !== '1' && i === str.length - 1) {
            newEl = digit[el];
        }
        return newEl;
    }).join('');
    return result.trim();
}
