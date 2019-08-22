<?php

function random_range( $start_num, $end_num = NULL ) {
    if ( is_array($start_num) && $end_num === NULL ) {
        $random_number = rand(0,count($start_num));
        return $start_num[$random_number];
    }
    return $randomNumber = rand( array("Volvo", "BMW", "Toyota") );
}


?>