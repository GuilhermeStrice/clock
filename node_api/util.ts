export function SplitNumber(number: number)
{
    var digits = number.toString().split('');
    var realDigits = digits.map(Number);
    return realDigits;
}