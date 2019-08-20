<?php
    function do_math($num1, $num2, $operator) {

        $solution = 0;
        
        switch ( $operator ) {
            case '+':
                $solution = $num1 + $num2;
                break;
            case '-':
                $solution = $num1 - $num2;
                break;
            case '*':
                $solution = $num1 * $num2;
                break;
            case '/':
                $solution = $num1 / $num2;
                break;
            default:
                return echo "Please Enter A Math Operation";
        }
        echo "Your solution is $solution"
    }
?>