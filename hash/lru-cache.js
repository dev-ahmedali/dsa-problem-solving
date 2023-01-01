const LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = {}
    this.tail = {}

    this.head.next = this.tail
    this.tail.prev = this.head
}

LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        // remove element from current position
        let current = this.map.get(key);
        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.tail.prev.next = current
        current.prev =this.tail.prev
        current.next = this.tail
        this.tail.prev = current
    }
}
