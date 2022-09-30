class LinkedList {
    constructor(value){
    this.head = {
        value: value,
        next: null
    }
    this.tail=this.head;
    this.length=1;
    }
    /////                               Append          //////

    append(value) {
        const newNode= {
            value: value,
            next: null
        }
        this.tail.next=newNode;    // t.t.next we targeting the null of tail
        this.tail=newNode;          // here we assigning the value
        this.length++
    }
    /////                               Prepend             //////////
    prepend(value) {
        const newNode={
            value: value,
            next: null
        }
        newNode.next=this.head;
        this.head=newNode;
        this.length++

    }
    printList(value){
        let array=[];
        let currentNode=this.head;
        while(currentNode!==null){
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }
        return array
    }
    
    insert(index, value){
        const newNode={
            value:value,
            next: null
        }
        const leader= this.traverseToIndex(index-1)
        const holdingpointer= leader.next;
        leader.next=newNode;
        newNode.next=holdingpointer;
        this.length++;
        

    }
    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while(counter!==index){
            currentNode=currentNode.next;
            counter++
        }
        return currentNode
    }
}
const myList= new LinkedList(10);
myList.append(16)
myList.prepend(2)
myList.insert(1,99)
console.log(myList)
let arr  = myList.printList()
console.log(arr)
