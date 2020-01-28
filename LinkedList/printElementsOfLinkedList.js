function printLinkedList(head) {
    let arr = [];
    let current = head;
    while(current) {
      arr.push(current.data);
      current = current.next;
    }
    arr.forEach(x => console.log(x))

}