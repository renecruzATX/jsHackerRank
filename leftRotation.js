function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a[0]);
        a.shift();        
    }    
    return a;
}