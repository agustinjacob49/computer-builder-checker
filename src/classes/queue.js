class Queue
{
    constructor()
    {
        this.items = [];
    }
                  
    /**
     * Function to enqueue an elemnt to tue queue
     * @param {Object} element 
     */
    enqueue(element)
    {    
        this.items.push(element);
    }

    /**
     * Function to dequeue an elemnt to tue queue
     * @param {Object} element 
    */
    dequeue()
    {
        if(this.isEmpty()) throw new Error('Queue is empty!');
        return this.items.shift();
    }

    /**
     * Return element at the top of the queue
    */
    front()
    {
        if(this.isEmpty()) throw new Error('No elements!');
        return this.items[0];
    }


    /**
     * Check if the queue is empty
    */
    isEmpty()
    {
        return this.items.length === 0;
    }
}


module.exports = Queue;