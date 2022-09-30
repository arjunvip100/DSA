//Stacks Implementation

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    peek() {
        console.log(this.top);
    }

    append(value){
        const newNode= new Node(value);
        if(this.length===0){
            this.top=newNode;
            this.bottom=newNode;
        }else{
            const holdingPointer = this.top; //cuz whatsoever in the top is gonna replace by new value
            this.top=newNode; // here the new node assigned as the top of the stack
            this.top.next=holdingPointer; // here the second of top assigned by the holding pointer which means the previous value of top after pushing the new value.
        }
        this.length++;
        return this;
    }
    
}

const myStack= new Stack();

myStack.append('nais');
myStack.append('enogh');
console.log(myStack)
