const input = 12;

// let star = '*'
// console.log(star);

p = 0
while(p <= (input-1)){
    
    
    // console.log('*')
    j = 0;
    let stars = '*';
    while(j <= (p-1)) {
        // console.log(j + ' *');
        stars = stars + '*';
        j = j + 1;
    }    
    
    console.log(stars)
    
    p = p + 1
}