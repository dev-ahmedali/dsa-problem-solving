const reverse = (head) => {
    let cur = head;
    let prev = null;
    let next;

    while(cur){
        next = cur.next;
        cur.next = prev
        prev = cur;
        cur = next
    }
    return prev;
}


var isPalindrome = function(head) {
   let fast = head;
   let slow = head;
   let start = head;
   let len = 0;

   while(fast && fast.next){
       fast = fast.next.next;
       slow = slow.next;
       len++
   }
   let mid = reverse(slow)
   while(len){
       len--;
       if(mid.val !== start.val) return false
       mid = mid.next;
       start = start.next;
   }
   return true;
};