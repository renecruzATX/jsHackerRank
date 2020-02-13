function cutTheSticks(arr) {        
    let updatedArr = arr;
    let sticksCut = [];      
    while (updatedArr.length > 0) {
        let min = Math.min(...updatedArr);
        let holder = [];
        if (!sticksCut.includes(updatedArr.length)) {
          sticksCut.push(updatedArr.length);
        }        
        for (let x of updatedArr) {
            if (x-min > 0) {
                holder.push(x-min)
            }
        }
        updatedArr = holder;
    }
    return sticksCut;       
}