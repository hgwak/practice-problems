function cocococombomath ( num1, num2, num3, num4, num5 ) {
    return ((( num1 * num2 ) / num3 ) / num4) - num5
}


//For fun
class ComboMath {
    constructor( num1, num2, num3, num4, num5 ) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }

    add=(addNum1, addNum2)=>{
        return addNum1 + addNum2;
    }

    subtract=(minusNum1, minusNum2)=>{
        return minusNum1 - minusNum2;
    }

    multiple=(multipleNum1, multipleNum2)=>{
        return multipleNum1 * multipleNum2;
    }

    divide=(divideNum1, divideNum2)=>{
        return divideNum1 / divideNum2
    }

    cocococombo () {
        return this.multiple( this.num1, this.num2 )
            .then( result => this.add( result, this.num3 ))
                .then(result =>  this.divide(result, this.num4))
                    .then(result => this.subtract(result, this.num5))
    }
}

// ## math combo

// Build a function, cocococombomath, that takes 5 numbers as parameters.
//     It:
// - multiplies the 1st number x the 2nd number
//     - the result of that, it adds the 3rd number
//         - the result of that, it divides by the 4th number
//             - the result of that, it subtracts the 5th number
//                 - it returns that result

//                     - example:
// - cocococombomath(3, 2, 6, 3, 5)
//     - Returns - 1
