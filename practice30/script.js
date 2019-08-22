function random_range( start_num, end_num ) {
    
    if ( Array.isArray( start_num ) && end_num === undefined ) {
        let randomNumber = Math.floor(Math.random() * start_num.length);
        return start_num[randomNumber];
    }

    end_num++
    ;
    return Math.floor(Math.random() * (end_num - start_num) + start_num);

}

console.log(random_range(2, 15));

console.log(random_range(1, 100));

console.log(random_range(['a', 'b', 'c', 'd', 'e']));
