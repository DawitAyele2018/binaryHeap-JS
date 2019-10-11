class BinaryHeap{
    constructor(){
        this.value = [];
    }

    // insert
    /* 
    - push a new value to the array
    - create a variable called currentValue and store the value inserted in curreentValule
    - create a variable called childIndex and initialize array length minus 1
    - create a variabel called parrentNode and initialize it to be childIndex- 1/2
   - loop through the array while parrentIndex is greater than zero or equal to zero and value at child Index greater than value at parentIndex
        * swap the values at child index with the values at parentIndex
        * childIndex = parent Index
        * parentIndex = childIndex-1/2
    - return the array
    */
    insert(value){
        this.value.push(value);
        var indexOfChild = this.value.length-1;
        var parentIndex = Math.floor((indexOfChild-1)/2);
        while(parentIndex>=0 && this.value[indexOfChild]>this.value[parentIndex]){
            [this.value[indexOfChild], this.value[parentIndex]] = [this.value[parentIndex], this.value[indexOfChild]];
            indexOfChild = parentIndex;
            parentIndex = Math.floor((indexOfChild-1)/2);
        }
        return this.value
    }

    // Extract max
    /* 
    - if arry is not empty
   - swap array at zero index with the arrayelement at index  array.length -1
   - pop the array once
   
   - create a varaible parentIndex and store zero
    -loop
   - create a variable called leftChildIndex and store 2*parentIndex+1
   - create a variable called rightChildIndex and store 2*parentIndex+2
  
   - create a variable to hold the swapValue , initialize it null
   -  if leftChildIndex > 0  and value at leftChildIndex greater than value at parentIndex
        * store leftChildIndex to swap
   - if rightChildIndex > 0 and value of rightIndex greater than value of leftIndex
        * store rightIndexChild to swap
    - if swap is not null swap the value at parenIndex with the value at swap
    - update parentnode to be the swap
    */

    extractMax(){
        if(!this.value)return null;
        var size = this.value.length-1;
        [this.value[0],this.value[size]] = [this.value[size],this.value[0]]
        var max = this.value.pop()
        var parentIndx = 0;
        while(true){
            var leftChildIdx = 2*parentIndx + 1;
            var rightChildIdx = 2*parentIndx + 2;
            var swap = null;
            if(leftChildIdx<=size && this.value[leftChildIdx]>this.value[parentIndx]){
                swap = leftChildIdx;
            }
            if(rightChildIdx<=size && this.value[rightChildIdx]>this.value[leftChildIdx]){
                swap = rightChildIdx;
            }

            if(swap){
                [this.value[parentIndx],this.value[swap]] = [this.value[swap],this.value[parentIndx]] ;
                parentIndx = swap;
            }
            if(!swap){
                return max;
            }
        }

    }
}

var heap = new BinaryHeap();
heap.insert(10)
heap.insert(15)
heap.insert(19)
heap.insert(11)
heap.insert(14)
heap.insert(18)
heap.insert(9)

class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.arr = [];
    }
    insert(value,priority){
        var node = new Node(value,priority);
        this.arr.push(node);
        var indexOfChild = this.arr.length-1;
        var parentIndex = Math.floor((indexOfChild-1)/2);
        while(parentIndex>=0 && this.arr[indexOfChild].priority>this.arr[parentIndex].priority){
            [this.arr[indexOfChild], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[indexOfChild]];
            indexOfChild = parentIndex;
            parentIndex = Math.floor((indexOfChild-1)/2);
        }
        return this.arr
    }
   

    extractMax(){
        if(!this.arr)return null;
        var size = this.arr.length-1;
        [this.arr[0],this.arr[size]] = [this.arr[size],this.arr[0]]
        var max = this.arr.pop()
        var parentIndx = 0;
        while(true){
            var leftChildIdx = 2*parentIndx + 1;
            var rightChildIdx = 2*parentIndx + 2;
            var swap = null;
            if(leftChildIdx<size && this.arr[leftChildIdx].priority>this.arr[parentIndx].priority){
                swap = leftChildIdx;
            }
            if(rightChildIdx<size && this.arr[rightChildIdx].priority>this.arr[leftChildIdx].priority){
                swap = rightChildIdx;
            }

            if(swap){
                [this.arr[parentIndx],this.arr[swap]] = [this.arr[swap],this.arr[parentIndx]] ;
                parentIndx = swap;
            }
            if(!swap){
                return max;
            }
        }

    }

}

var pq = new PriorityQueue();
pq.insert('dawit',5);
pq.insert('girma',2);
pq.insert('ayele',1);
pq.insert('sam',4);
pq.insert('john',3);
pq.insert('adam',6);


// Insertion is O(logN)
// Removal is O(logN)
// Search is O(N)