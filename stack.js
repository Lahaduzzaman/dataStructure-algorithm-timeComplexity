// Stack = LIFO(LAST IN FIRST OUT)



class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Saif")
guest.add("Rakib")
guest.add("Pulok")
guest.add("Rakin")
guest.add("Bappy")
console.log(guest.stack)

const speaker = guest.remove()
console.log(speaker)
console.log(guest.stack)


 