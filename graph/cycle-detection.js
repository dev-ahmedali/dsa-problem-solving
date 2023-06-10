class Graph {
    constructor() {
      this.graph = {};
      this.visited = {}
      this.parent = {}
      this.parent[src] = null
      
    }
  
    add(a, b) {
      if (this.graph[a]) {
        this.graph[a].push(b);
      } else {
        this.graph[a] = [b];
      }
  
      if (this.graph[b]) {
        this.graph[b].push(a);
      } else {
        this.graph[b] = [a];
      }
    }

    cycleDection(src) {
        let queue = []
        queue.push(src)
        this.visited[src] = true
        this.parent[src] = null

        while(queue.length){
            let data = queue[0]

            let arr = this.graph[data]
            for(let i = 0; i < arr.length; i++) {
                if(!this.visited(arr[i])) {
                    queue.push(arr[i])
                    this.visited(arr[i]) = true
                    this.parent[arr[i]] = data
                }
                else if(this.visited[arr[i]] && this.parent[data] === arr[i]) {
                    // nothing to do
                }
                else if(this.visited[arr[i]] && this.parent[data] !== arr[i]){
                    return "Cycle Detected"
                }
            }

            queue.shift();
        }
        return 'Cycle not found'
    }
  }
  
  let gp = new Graph();
  
  gp.add(5, 4);
  gp.add(5, 1);
  gp.add(1, 2);
  gp.add(2, 3);
  gp.add(3, 4);
  gp.add(1, 6);
  gp.add(6, 5);
  gp.add(6, 7);
  gp.add(7, 2);
  gp.add(1, 4);
  
  console.log(gp.graph);