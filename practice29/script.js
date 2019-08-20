
function do_math ( num1, num2, operator ) {
    var solution = 0;
    switch ( operator ) {
        case '+':
            solution = num1 + num2;
            break;
        case '-':
            solution = num1 - num2;
            break;
        case '*':
            solution = num1 * num2;
            break;
        case '/':
            solution = num1 / num2;
            break;
        default:
            return console.error("Please enter a Number")
    }
    return console.log(solution);
}

do_math(5,2,'*');
do_math(5,2,'+');
do_math(5,2,'-');
do_math(5, 2, '/');
do_math(5, 2, 'o');
