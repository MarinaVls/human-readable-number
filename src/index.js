module.exports = function toReadable (number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberString = number.toString();

    if (number < 0) return ('Enter a positive value.');

    if (number === 0) return 'zero';

    if (number < 20) {
        return ones[number];
    }

    if (numberString.length === 2) {
        if(ones[numberString[1]] == '') {
            return tens[numberString[0]];
        }else {
            return tens[numberString[0]] + ' ' + ones[numberString[1]];
        }
    }

    if (numberString.length == 3) {
        if (numberString[1] === '0' && numberString[2] === '0'){
            return ones[numberString[0]] + ' hundred';
        }else{
            return ones[numberString[0]] + ' hundred ' +  toReadable(+(numberString[1] + numberString[2])) ;
        }
    }

    if (numberString.length === 4) {
        let numberEnd = +(numberString[1] + numberString[2] + numberString[3]);
            if (numberEnd === 0) {
                return ones[numberString[0]] + ' thousand';
            } else if (numberEnd < 100) {
                return ones[numberString[0]] + ' thousand ' + toReadable(numberEnd);
            }
        return ones[numberString[0]] + ' thousand ' + toReadable(numberEnd);
    }
}