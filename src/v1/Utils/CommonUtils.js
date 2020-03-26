export default class CommonUtils {

    static moduloSum(a, b, divisor, offset = 0, subtraction = false) {
        let dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
        return CommonUtils.modulo(dividend, divisor) + offset;
    }

    static modulo(a, b) {
        return ((a % b) + b) % b;
    }

}